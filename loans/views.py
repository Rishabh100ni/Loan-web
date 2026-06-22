import json
from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.conf import settings
from .models import LoanApplication
from datetime import datetime

def safe_float(val, default=0.0):
    try:
        return float(val)
    except (ValueError, TypeError):
        return default

def safe_int(val, default=0):
    try:
        return int(val)
    except (ValueError, TypeError):
        return default

def index_view(request):
    return render(request, 'loans/index.html')

@csrf_exempt
def check_eligibility(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            age = safe_int(data.get('age'))
            income = safe_float(data.get('income'))
            existing_emi = safe_float(data.get('existing_emi'))
            cibil = safe_int(data.get('cibil'))

            if age == 0 or income == 0 or cibil == 0:
                return JsonResponse({'status': 'error', 'message': 'Please fill all fields'}, status=400)

            foir = existing_emi / income if income > 0 else 0
            max_emi = income * 0.5
            eligible_amt = round((max_emi - existing_emi) * 36)

            if 21 <= age <= 60 and income >= 20000 and cibil >= 680 and foir < 0.5:
                return JsonResponse({'status': 'ok', 'eligible_amount': eligible_amt})
            elif income >= 15000 and cibil >= 600:
                return JsonResponse({'status': 'partial'})
            else:
                return JsonResponse({'status': 'no'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    return JsonResponse({'status': 'error'}, status=405)

@csrf_exempt
def apply_loan(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            dob_str = data.get('dob')
            dob = None
            if dob_str:
                dob = datetime.strptime(dob_str, '%Y-%m-%d').date()

            work_exp = data.get('work_experience')
            try:
                work_exp = int(work_exp)
            except (ValueError, TypeError):
                work_exp = None

            LoanApplication.objects.create(
                full_name=data.get('full_name', ''),
                mobile_number=data.get('mobile_number', ''),
                email=data.get('email', ''),
                dob=dob,
                pan_number=data.get('pan_number', ''),
                loan_type=data.get('loan_type', ''),
                employment_type=data.get('employment_type', ''),
                company_name=data.get('company_name', ''),
                designation=data.get('designation', ''),
                work_experience=work_exp,
                office_address=data.get('office_address', ''),
                monthly_income=safe_float(data.get('monthly_income')),
                loan_amount_required=safe_float(data.get('loan_amount_required')),
                loan_tenure_months=safe_int(data.get('loan_tenure_months')),
                existing_emi=safe_float(data.get('existing_emi'))
            )

            # Send Email to Admins
            admin_emails = ['rishabh@example.com', 'anish@example.com'] # Placeholder emails
            admin_subject = f"New Loan Application: {data.get('full_name', 'Applicant')}"
            admin_message = f"""A new loan application has been submitted.

Name: {data.get('full_name')}
Phone: {data.get('mobile_number')}
Email: {data.get('email')}
Loan Type: {data.get('loan_type')}
Amount Required: ₹{data.get('loan_amount_required', 0)}
Monthly Income: ₹{data.get('monthly_income', 0)}

Log in to the Django Admin panel (http://localhost:8000/admin/) to view the complete details.
"""
            try:
                send_mail(admin_subject, admin_message, settings.DEFAULT_FROM_EMAIL, admin_emails, fail_silently=True)
            except Exception as e:
                pass

            # Send Email to User
            user_email = data.get('email')
            if user_email:
                user_subject = "OctoWealth: Loan Application Received"
                user_message = f"""Hello {data.get('full_name', 'Applicant')},

Thank you for applying for a {data.get('loan_type', 'Loan')} with OctoWealth!

We have successfully received your application. Our team will review your details and a representative will contact you shortly.

Best regards,
The OctoWealth Team
"""
                try:
                    send_mail(user_subject, user_message, settings.DEFAULT_FROM_EMAIL, [user_email], fail_silently=True)
                except Exception as e:
                    pass

            return JsonResponse({'status': 'success', 'message': 'Application submitted successfully!'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    return JsonResponse({'status': 'error'}, status=405)

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data.get('username')
            password = data.get('password')
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return JsonResponse({'status': 'success'})
            else:
                return JsonResponse({'status': 'error', 'message': 'Invalid credentials'}, status=401)
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    return JsonResponse({'status': 'error'}, status=405)

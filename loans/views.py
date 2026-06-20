from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate, login
from .models import LoanApplication
from datetime import datetime

def index_view(request):
    return render(request, 'loans/index.html')

@api_view(['POST'])
def check_eligibility(request):
    data = request.data
    try:
        age = int(data.get('age', 0))
        income = float(data.get('income', 0))
        existing_emi = float(data.get('existing_emi', 0))
        cibil = int(data.get('cibil', 0))

        if age == 0 or income == 0 or cibil == 0:
            return Response({'status': 'error', 'message': 'Please fill all fields'}, status=400)

        foir = existing_emi / income if income > 0 else 0
        max_emi = income * 0.5
        eligible_amt = round((max_emi - existing_emi) * 36)

        if 21 <= age <= 60 and income >= 20000 and cibil >= 680 and foir < 0.5:
            return Response({'status': 'ok', 'eligible_amount': eligible_amt})
        elif income >= 15000 and cibil >= 600:
            return Response({'status': 'partial'})
        else:
            return Response({'status': 'no'})
    except Exception as e:
        return Response({'status': 'error', 'message': str(e)}, status=400)

@api_view(['POST'])
def apply_loan(request):
    data = request.data
    try:
        dob_str = data.get('dob')
        dob = None
        if dob_str:
            dob = datetime.strptime(dob_str, '%Y-%m-%d').date()

        work_exp = data.get('work_experience')
        work_exp = int(work_exp) if work_exp else None

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
            monthly_income=float(data.get('monthly_income', 0)),
            loan_amount_required=float(data.get('loan_amount_required', 0)),
            loan_tenure_months=int(data.get('loan_tenure_months', 0)),
            existing_emi=float(data.get('existing_emi', 0))
        )
        return Response({'status': 'success', 'message': 'Application submitted successfully!'})
    except Exception as e:
        return Response({'status': 'error', 'message': str(e)}, status=400)

@api_view(['POST'])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return Response({'status': 'success'})
    else:
        return Response({'status': 'error', 'message': 'Invalid credentials'}, status=401)

from django.contrib import admin
from django.core.mail import send_mail
from django.conf import settings
from .models import LoanApplication

@admin.register(LoanApplication)
class LoanApplicationAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'loan_type', 'loan_amount_required', 'status', 'created_at')
    list_filter = ('status', 'loan_type')
    search_fields = ('full_name', 'email', 'pan_number', 'mobile_number')

    def save_model(self, request, obj, form, change):
        if change:
            old_obj = LoanApplication.objects.get(pk=obj.pk)
            # If status changed to APPROVED
            if old_obj.status != 'APPROVED' and obj.status == 'APPROVED':
                subject = "Congratulations! Your Loan Application is Approved"
                message = f"Hello {obj.full_name},\n\nGreat news! Your application for a {obj.loan_type} has been approved.\n\nOur representatives will reach out to you shortly for the next steps.\n\nBest regards,\nThe OctoWealth Team"
                try:
                    send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, [obj.email], fail_silently=True)
                except Exception as e:
                    pass
        super().save_model(request, obj, form, change)

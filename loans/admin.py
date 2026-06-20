from django.contrib import admin
from .models import LoanApplication

@admin.register(LoanApplication)
class LoanApplicationAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'loan_type', 'loan_amount_required', 'status', 'created_at')
    list_filter = ('status', 'loan_type')
    search_fields = ('full_name', 'email', 'pan_number', 'mobile_number')

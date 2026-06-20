from django.db import models

class LoanApplication(models.Model):
    STATUS_CHOICES = [
        ('PENDING', 'Pending'),
        ('UNDER_REVIEW', 'Under Review'),
        ('APPROVED', 'Approved'),
        ('REJECTED', 'Rejected'),
    ]

    LOAN_TYPE_CHOICES = [
        ('Personal Loan', 'Personal Loan'),
        ('Business Loan', 'Business Loan'),
        ('Home Loan', 'Home Loan'),
        ('Education Loan', 'Education Loan'),
        ('Vehicle Loan', 'Vehicle Loan'),
        ('Gold Loan', 'Gold Loan'),
    ]

    EMP_TYPE_CHOICES = [
        ('Salaried', 'Salaried'),
        ('Self-Employed', 'Self-Employed'),
        ('Business Owner', 'Business Owner'),
        ('Freelancer', 'Freelancer'),
    ]

    # Personal Info
    full_name = models.CharField(max_length=255)
    mobile_number = models.CharField(max_length=20)
    email = models.EmailField()
    dob = models.DateField(null=True, blank=True)
    pan_number = models.CharField(max_length=20)
    loan_type = models.CharField(max_length=50, choices=LOAN_TYPE_CHOICES)

    # Employment Info
    employment_type = models.CharField(max_length=50, choices=EMP_TYPE_CHOICES)
    company_name = models.CharField(max_length=255, blank=True, null=True)
    designation = models.CharField(max_length=100, blank=True, null=True)
    work_experience = models.IntegerField(blank=True, null=True) # years
    office_address = models.TextField(blank=True, null=True)

    # Financial Info
    monthly_income = models.DecimalField(max_digits=12, decimal_places=2)
    loan_amount_required = models.DecimalField(max_digits=12, decimal_places=2)
    loan_tenure_months = models.IntegerField()
    existing_emi = models.DecimalField(max_digits=12, decimal_places=2, default=0)

    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='PENDING')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.loan_type} ({self.status})"

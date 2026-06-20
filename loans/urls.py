from django.urls import path
from . import views

urlpatterns = [
    path('', views.index_view, name='index'),
    path('api/eligibility/', views.check_eligibility, name='check_eligibility'),
    path('api/apply/', views.apply_loan, name='apply_loan'),
    path('api/login/', views.login_view, name='login'),
]

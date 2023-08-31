from django.urls import path 
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('history/', views.history, name='history'),
    path('contact/', views.contact, name="contact"),
    path('services/', views.services, name='services'),
]
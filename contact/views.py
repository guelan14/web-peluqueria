from django.shortcuts import render
from django.views.generic import ListView

# Create your views here.
def contact(request):
    return render(request,"contact\contact.html")
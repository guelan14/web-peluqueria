from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,"core/home.html")

def history(request):
    return render(request,"core/history.html")

def contact(request):
    return render(request,"core/contact.html")

def services(request):
    return render(request,"core/services.html")


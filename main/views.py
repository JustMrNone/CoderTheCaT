from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    return render(request, 'main/index.html')

def blog(request):
    return render(request, 'main/blog.html')

def projects(request):
    return render(request, 'main/projects.html')

def info(request):
    return render(request, 'main/info.html')
    
def settings(request):
    return render(request, 'main/settings.html')
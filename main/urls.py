from django.urls import path
from . import views 


urlpatterns = [
    path('', views.index, name="index"),
    path('blog', views.blog, name="blog"),
    path('projects', views.projects, name="projects"),
    path('info', views.info, name="info"),
    path('settings', views.settings, name="settings"),
         
]

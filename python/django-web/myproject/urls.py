from django.urls import path
from django.http import JsonResponse
import os
import sys

def home_view(request):
    return JsonResponse({
        "service": "django-web",
        "framework": "django",
        "python_version": sys.version.split()[0]
    })

def health_view(request):
    return JsonResponse({"status": "ok", "runtime": "python", "framework": "django"})

def env_view(request):
    return JsonResponse({
        "debug": os.getenv("DEBUG", "True"),
        "sample_key": os.getenv("SAMPLE_KEY", "django_default_value"),
        "port": os.getenv("PORT", "8000")
    })

urlpatterns = [
    path('', home_view),
    path('health', health_view),
    path('env-test', env_view),
]

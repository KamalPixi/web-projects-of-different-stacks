# Django Web Service

Full Django MVC web application configured for WSGI deployment.

- **Stack**: Python
- **Framework**: Django + Gunicorn
- **Service Type**: Web
- **Build Command**: `pip install -r requirements.txt`
- **Start Command**: `gunicorn --bind 0.0.0.0:${PORT:-8000} myproject.wsgi:application`
- **Default Port**: `8000` (respects `PORT` env var)
- **Health Check Endpoint**: `/health`
- **Other Endpoints**: `/`, `/env-test`

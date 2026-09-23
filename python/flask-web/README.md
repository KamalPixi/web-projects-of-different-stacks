# Flask Web Service

Standard WSGI web application using Flask + Gunicorn.

- **Stack**: Python
- **Framework**: Flask + Gunicorn
- **Service Type**: Web
- **Build Command**: `pip install -r requirements.txt`
- **Start Command**: `gunicorn --bind 0.0.0.0:${PORT:-5000} app:app`
- **Default Port**: `5000` (respects `PORT` env var)
- **Health Check Endpoint**: `/health`
- **Other Endpoints**: `/`, `/env-test`

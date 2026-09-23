# FastAPI Web Service

Modern asynchronous ASGI web API service.

- **Stack**: Python
- **Framework**: FastAPI + Uvicorn
- **Service Type**: Web
- **Build Command**: `pip install -r requirements.txt`
- **Start Command**: `uvicorn main:app --host 0.0.0.0 --port ${PORT:-8000}`
- **Default Port**: `8000` (respects `PORT` env var)
- **Health Check Endpoint**: `/health`
- **Other Endpoints**: `/` (info & uptime), `/env-test` (environment variable test)

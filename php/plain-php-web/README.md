# Plain PHP Web Service

Lightweight standalone PHP web application using PHP's built-in web server or Apache/Nginx web servers.

- **Stack**: PHP
- **Framework**: Vanilla PHP
- **Service Type**: Web
- **Start Command**: `php -S 0.0.0.0:${PORT:-8080} -t public`
- **Default Port**: `8080` (respects `PORT` env var)
- **Health Check Endpoint**: `/health`
- **Other Endpoints**: `/`, `/env-test`

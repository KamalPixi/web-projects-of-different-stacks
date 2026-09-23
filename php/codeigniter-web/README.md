# CodeIgniter Web Service

CodeIgniter framework project structure.

- **Stack**: PHP
- **Framework**: CodeIgniter
- **Service Type**: Web
- **Build Command**: `composer install --no-dev`
- **Start Command**: `php -S 0.0.0.0:${PORT:-8080} -t public`
- **Default Port**: `8080` (respects `PORT` env var)
- **Health Check Endpoint**: `/health`
- **Other Endpoints**: `/`, `/env-test`

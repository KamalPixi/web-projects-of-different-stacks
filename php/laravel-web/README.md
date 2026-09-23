# Laravel Web Service

Standard Laravel MVC application project structure.

- **Stack**: PHP
- **Framework**: Laravel
- **Service Type**: Web
- **Build Command**: `composer install --no-dev --optimize-autoloader`
- **Start Command**: `php artisan serve --host=0.0.0.0 --port=${PORT:-8000}`
- **Default Port**: `8000` (respects `PORT` env var)
- **Health Check Endpoint**: `/health`
- **Other Endpoints**: `/`, `/env-test`

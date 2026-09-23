# Platform Test Projects Matrix

This repository contains ready-to-deploy test applications and background workers across **Node.js**, **Python**, **PHP**, and **.NET** designed specifically to test a **Render-like cloud platform**.

Each project is designed to validate:
- **Buildpack / Native runner builds** & **Dockerfile detection**
- Dynamic `$PORT` binding (`0.0.0.0:$PORT`)
- Platform **Healthcheck** endpoints (`/health`)
- Dynamic **Environment Variable injection** (`/env-test`)
- Background **Worker processes** (infinite loops, log output, graceful termination on `SIGTERM`)
- Graceful shutdown handling

---

## Directory & Framework Overview

| Stack | Directory | Type | Framework / Tooling | Start Command | Healthcheck |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Node.js** | [`nodejs/express-web`](nodejs/express-web) | Web | Express.js | `npm start` | `GET /health` |
| | [`nodejs/nestjs-web`](nodejs/nestjs-web) | Web | NestJS (TypeScript) | `npm start` | `GET /health` |
| | [`nodejs/nextjs-web`](nodejs/nextjs-web) | Web | Next.js (SSR / API) | `npm start` | `GET /api/health` |
| | [`nodejs/worker-bullmq`](nodejs/worker-bullmq) | Worker | Node.js Background Loop | `npm start` | N/A (Worker) |
| **Python** | [`python/fastapi-web`](python/fastapi-web) | Web | FastAPI + Uvicorn (ASGI) | `uvicorn main:app --host 0.0.0.0 --port $PORT` | `GET /health` |
| | [`python/flask-web`](python/flask-web) | Web | Flask + Gunicorn (WSGI) | `gunicorn --bind 0.0.0.0:$PORT app:app` | `GET /health` |
| | [`python/django-web`](python/django-web) | Web | Django + Gunicorn | `gunicorn --bind 0.0.0.0:$PORT myproject.wsgi:application` | `GET /health` |
| | [`python/celery-worker`](python/celery-worker) | Worker | Python Queue Consumer | `python worker.py` | N/A (Worker) |
| **PHP** | [`php/laravel-web`](php/laravel-web) | Web | Laravel | `php artisan serve --host=0.0.0.0 --port=$PORT` | `GET /health` |
| | [`php/codeigniter-web`](php/codeigniter-web) | Web | CodeIgniter 4 | `php -S 0.0.0.0:$PORT -t public` | `GET /health` |
| | [`php/plain-php-web`](php/plain-php-web) | Web | Vanilla PHP Server | `php -S 0.0.0.0:$PORT -t public` | `GET /health` |
| | [`php/queue-worker`](php/queue-worker) | Worker | CLI Long-running Worker | `php worker.php` | N/A (Worker) |
| **.NET** | [`dotnet/webapi`](dotnet/webapi) | Web | ASP.NET Core 8 Web API | `dotnet run` (or publish DLL) | `GET /health` |
| | [`dotnet/mvc-web`](dotnet/mvc-web) | Web | ASP.NET Core 8 MVC | `dotnet run` (or publish DLL) | `GET /health` |
| | [`dotnet/background-worker`](dotnet/background-worker) | Worker | .NET 8 Background Service | `dotnet run` (or publish DLL) | N/A (Worker) |

---

## How to Test Each Project on Your Platform

### 1. Connecting Individual Projects via Git Upstream
You can push any subfolder as its own repository to GitHub/GitLab:

```bash
# Push just the express-web folder to a standalone GitHub repo:
git subtree push --prefix nodejs/express-web git@github.com:youruser/render-test-express.git main
```

Or initialize a git repo inside the target directory:
```bash
cd nodejs/express-web
git init
git add .
git commit -m "feat: initial test project"
git remote add origin <your-git-url>
git push -u origin main
```

### 2. Platform Build & Run Modes
Every project includes:
1. **Procfile** for platforms supporting Heroku/Render standard `Procfile` (`web: ...`, `worker: ...`).
2. **Dockerfile** for containerized deployments.
3. **Native dependency files** (`package.json`, `requirements.txt`, `composer.json`, `*.csproj`) for native buildpack/Nixpacks detection.

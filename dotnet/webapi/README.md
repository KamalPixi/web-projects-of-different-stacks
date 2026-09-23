# .NET Web API Service

Minimal API / ASP.NET Core 8 Web API service.

- **Stack**: .NET (.NET 8)
- **Framework**: ASP.NET Core Web API
- **Service Type**: Web
- **Build Command**: `dotnet publish -c Release -o out`
- **Start Command**: `dotnet run` (or `dotnet out/WebApi.dll`)
- **Default Port**: `8080` (respects `PORT` env var)
- **Health Check Endpoint**: `/health`
- **Other Endpoints**: `/`, `/env-test`, `/weatherforecast`

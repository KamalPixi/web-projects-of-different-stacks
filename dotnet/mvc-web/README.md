# .NET MVC Web Service

ASP.NET Core Model-View-Controller web application.

- **Stack**: .NET (.NET 8)
- **Framework**: ASP.NET Core MVC
- **Service Type**: Web
- **Build Command**: `dotnet publish -c Release -o out`
- **Start Command**: `dotnet run` (or `dotnet out/MvcWeb.dll`)
- **Default Port**: `8080` (respects `PORT` env var)
- **Health Check Endpoint**: `/health`
- **Other Endpoints**: `/`, `/env-test`, `/Home/Privacy`

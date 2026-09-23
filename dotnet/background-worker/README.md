# .NET Background Worker

Non-HTTP background console worker process for .NET 8.

- **Stack**: .NET (.NET 8)
- **Service Type**: Background Worker
- **Build Command**: `dotnet publish -c Release -o out`
- **Start Command**: `dotnet run` (or `dotnet out/BackgroundWorker.dll`)
- **Key Environment Variables**:
  - `WORKER_INTERVAL_SEC`: interval between background iterations (default `5`)
- **Behavior**: Traps signals gracefully, logs timestamped heartbeats and GC memory.

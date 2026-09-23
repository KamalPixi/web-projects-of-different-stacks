using System;
using System.Threading;
using System.Threading.Tasks;

Console.WriteLine("[worker] Starting .NET Background Worker...");
Console.WriteLine($"[worker] .NET Runtime: {Environment.Version}, PID: {Environment.ProcessId}");

var intervalEnv = Environment.GetEnvironmentVariable("WORKER_INTERVAL_SEC");
var intervalSec = int.TryParse(intervalEnv, out var sec) ? sec : 5;
var interval = TimeSpan.FromSeconds(intervalSec);

using var cts = new CancellationTokenSource();

Console.CancelKeyPress += (s, e) =>
{
    Console.WriteLine("[worker] SIGINT/CancelKeyPress received. Initiating graceful shutdown...");
    e.Cancel = true;
    cts.Cancel();
};

AppDomain.CurrentDomain.ProcessExit += (s, e) =>
{
    if (!cts.IsCancellationRequested)
    {
        Console.WriteLine("[worker] ProcessExit (SIGTERM) received. Initiating graceful shutdown...");
        cts.Cancel();
    }
};

long jobCounter = 0;

try
{
    while (!cts.Token.IsCancellationRequested)
    {
        jobCounter++;
        Console.WriteLine($"[worker] [{DateTime.UtcNow:O}] Processed background job #{jobCounter} in .NET worker. Memory: {GC.GetTotalMemory(false) / 1024}KB");
        await Task.Delay(interval, cts.Token);
    }
}
catch (OperationCanceledException)
{
    Console.WriteLine("[worker] Task loop cancelled.");
}

Console.WriteLine("[worker] Clean shutdown complete. Exiting process.");

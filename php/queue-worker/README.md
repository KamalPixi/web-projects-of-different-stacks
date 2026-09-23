# PHP Queue Worker

Background worker process for executing queue jobs in PHP.

- **Stack**: PHP
- **Service Type**: Background Worker
- **Start Command**: `php worker.php`
- **Key Environment Variables**:
  - `WORKER_INTERVAL_SEC`: interval between iterations in seconds (default `5`)
- **Behavior**: Traps signals with `pcntl` when available, logs memory consumption and task completion.

# Python Background Worker

Background consumer / queue worker process for testing non-web workloads.

- **Stack**: Python
- **Service Type**: Background Worker
- **Build Command**: `pip install -r requirements.txt`
- **Start Command**: `python worker.py`
- **Key Environment Variables**:
  - `WORKER_INTERVAL_SEC`: polling interval in seconds (default `5`)
  - `WORKER_ID`: worker identifier string
- **Behavior**: Continuous loop with graceful shutdown on `SIGINT` / `SIGTERM`.

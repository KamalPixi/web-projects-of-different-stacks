# Node.js Background Worker

Non-HTTP background worker process for testing background worker/queue daemon runners on your platform.

- **Stack**: Node.js
- **Service Type**: Background Worker
- **Build Command**: `npm install`
- **Start Command**: `npm start` (or `node worker.js`)
- **Key Environment Variables**:
  - `WORKER_INTERVAL_SEC`: interval between background processing ticks (default: `5`)
- **Behavior**: Periodically logs job execution, traps `SIGTERM`/`SIGINT`, and exits with code 0.

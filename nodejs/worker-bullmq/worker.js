console.log('[worker] Starting background worker process...');
console.log(`[worker] Node Version: ${process.version}, PID: ${process.pid}`);
console.log(`[worker] WORKER_INTERVAL_SEC: ${process.env.WORKER_INTERVAL_SEC || 5}`);

let isRunning = true;
let jobCounter = 0;
const intervalMs = (parseInt(process.env.WORKER_INTERVAL_SEC, 10) || 5) * 1000;

const intervalTimer = setInterval(() => {
  if (!isRunning) return;
  jobCounter++;
  const timestamp = new Date().toISOString();
  console.log(`[worker] [${timestamp}] Processed job #${jobCounter} successfully. Memory: ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`);
}, intervalMs);

function handleShutdown(signal) {
  console.log(`[worker] Received ${signal}. Starting graceful worker drain...`);
  isRunning = false;
  clearInterval(intervalTimer);
  console.log('[worker] Finished pending tasks. Exiting cleanly.');
  process.exit(0);
}

process.on('SIGTERM', () => handleShutdown('SIGTERM'));
process.on('SIGINT', () => handleShutdown('SIGINT'));

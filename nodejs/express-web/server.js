const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    service: 'express-web',
    status: 'online',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', runtime: 'nodejs', version: process.version });
});

app.get('/env-test', (req, res) => {
  res.json({
    node_env: process.env.NODE_ENV || 'not_set',
    sample_key: process.env.SAMPLE_KEY || 'default_sample_value',
    port: PORT
  });
});

const server = app.listen(PORT, HOST, () => {
  console.log(`[express-web] Server listening on http://${HOST}:${PORT}`);
  console.log(`[express-web] Process PID: ${process.pid}`);
});

function gracefulShutdown(signal) {
  console.log(`[express-web] Received ${signal}. Shutting down gracefully...`);
  server.close(() => {
    console.log('[express-web] Closed out remaining connections.');
    process.exit(0);
  });
  setTimeout(() => {
    console.error('[express-web] Forcing shutdown after timeout.');
    process.exit(1);
  }, 10000);
}

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

<?php
declare(ticks = 1);

echo "[worker] Starting PHP Queue Worker...\n";
echo "[worker] PHP Version: " . phpversion() . ", PID: " . getmypid() . "\n";

$running = true;

if (extension_loaded('pcntl')) {
    pcntl_signal(SIGTERM, function () use (&$running) {
        echo "[worker] Received SIGTERM signal. Stopping gracefully...\n";
        $running = false;
    });
    pcntl_signal(SIGINT, function () use (&$running) {
        echo "[worker] Received SIGINT signal. Stopping gracefully...\n";
        $running = false;
    });
}

$interval = (int)(getenv('WORKER_INTERVAL_SEC') ?: 5);
$jobCount = 0;

while ($running) {
    $jobCount++;
    echo sprintf("[worker] [%s] Processed PHP queue task #%d successfully. Memory: %dKB\n",
        date('c'),
        $jobCount,
        round(memory_get_usage() / 1024)
    );
    sleep($interval);
}

echo "[worker] Worker shutdown completed. Exiting cleanly.\n";
exit(0);

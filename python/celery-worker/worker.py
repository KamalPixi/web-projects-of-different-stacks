import os
import sys
import time
import signal
from datetime import datetime

running = True

def signal_handler(signum, frame):
    global running
    sig_name = signal.Signals(signum).name
    print(f"[worker] Received {sig_name}. Gracefully terminating background loop...")
    running = False

signal.signal(signal.SIGTERM, signal_handler)
signal.signal(signal.SIGINT, signal_handler)

def main():
    interval = int(os.getenv("WORKER_INTERVAL_SEC", 5))
    worker_id = os.getenv("WORKER_ID", "default-worker-1")
    print(f"[worker] Python Background Worker started. ID={worker_id}, interval={interval}s, PID={os.getpid()}")
    print(f"[worker] Python Version: {sys.version.split()[0]}")

    job_counter = 0
    while running:
        job_counter += 1
        print(f"[worker] [{datetime.utcnow().isoformat()}] Job #{job_counter} processed by worker {worker_id}.")
        time.sleep(interval)

    print("[worker] Cleanup finished. Exiting process.")
    sys.exit(0)

if __name__ == "__main__":
    main()

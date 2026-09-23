import os
import time
from datetime import datetime
from flask import Flask, jsonify

app = Flask(__name__)
start_time = time.time()

@app.route('/')
def root():
    return jsonify({
        "service": "flask-web",
        "framework": "flask",
        "timestamp": datetime.utcnow().isoformat(),
        "uptime_seconds": round(time.time() - start_time, 2)
    })

@app.route('/health')
def health():
    return jsonify({"status": "ok", "runtime": "python", "framework": "flask"}), 200

@app.route('/env-test')
def env_test():
    return jsonify({
        "flask_env": os.getenv("FLASK_ENV", "production"),
        "sample_key": os.getenv("SAMPLE_KEY", "flask_default_value"),
        "port": os.getenv("PORT", "5000")
    })

if __name__ == '__main__':
    port = int(os.getenv("PORT", 5000))
    app.run(host="0.0.0.0", port=port)

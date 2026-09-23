import os
import time
from datetime import datetime
from fastapi import FastAPI

app = FastAPI(title="FastAPI Platform Test App")
start_time = time.time()

@app.get("/")
def read_root():
    return {
        "service": "fastapi-web",
        "framework": "fastapi",
        "timestamp": datetime.utcnow().isoformat(),
        "uptime_seconds": round(time.time() - start_time, 2)
    }

@app.get("/health")
def health_check():
    return {"status": "ok", "runtime": "python"}

@app.get("/env-test")
def env_test():
    return {
        "environment": os.getenv("ENV", "development"),
        "sample_key": os.getenv("SAMPLE_KEY", "fastapi_default_value"),
        "port": os.getenv("PORT", "8000")
    }

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", "8000"))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=False)

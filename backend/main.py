from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import yemekler

app = FastAPI(title="Feyza'nın Yemek Tarifleri API", version="1.0.0")

# CORS ayarları - Frontend'den API çağrılarına izin ver
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Next.js default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routes
app.include_router(yemekler.router, prefix="/api/v1")

@app.get("/")
async def root():
    return {"message": "Feyza'nın Yemek Tarifleri API'sine Hoşgeldiniz!"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

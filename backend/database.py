from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from models import Base

# SQLite veritabanı kullanıyoruz. Bu, tek bir dosyada tüm verileri saklayan basit bir veritabanı.
SQLALCHEMY_DATABASE_URL = "sqlite:///./yemekler.db"

# Veritabanına bağlanmak için bir "motor" oluşturuyoruz.
engine = create_engine(
    SQLALCHEMY_DATABASE_URL, 
    connect_args={"check_same_thread": False}
)

# Veritabanıyla konuşmak için "oturum" oluşturuyoruz.
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Tüm tabloları oluşturuyoruz.
Base.metadata.create_all(bind=engine)

# Veritabanı oturumu almak için bir bağımlılık oluşturuyoruz.
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Feyza'nın Yemek Tarifleri

Bu proje, yemek tarifleri ve kategorileri için bir web uygulamasıdır. Backend Python FastAPI ile, frontend Next.js ile geliştirilmiştir.

## Proje Yapısı

```
food_project/
├── backend/          # Python FastAPI backend
├── frontend/         # Next.js frontend
└── README.md
```

## Kurulum ve Çalıştırma

### Backend Kurulumu

1. Backend dizinine gidin:
```bash
cd backend
```

2. Python paketlerini yükleyin:
```bash
pip install -r requirements.txt
```

3. Veritabanını oluşturun ve test verilerini ekleyin:
```bash
python seed_data.py
```

4. Backend'i çalıştırın:
```bash
python main.py
```

Backend http://localhost:8000 adresinde çalışacaktır.

### Frontend Kurulumu

1. Frontend dizinine gidin:
```bash
cd frontend
```

2. Node.js paketlerini yükleyin:
```bash
npm install
```

3. Frontend'i çalıştırın:
```bash
npm run dev
```

Frontend http://localhost:3000 adresinde çalışacaktır.

## API Endpoints

### Kategoriler
- `GET /api/v1/categories` - Tüm kategorileri getir
- `POST /api/v1/categories` - Yeni kategori oluştur
- `GET /api/v1/categories/{id}` - Belirli kategoriyi getir

### Tarifler
- `GET /api/v1/recipes` - Tüm tarifleri getir
- `POST /api/v1/recipes` - Yeni tarif oluştur
- `GET /api/v1/recipes/{id}` - Belirli tarifi getir
- `GET /api/v1/categories/{id}/recipes` - Kategoriye ait tarifleri getir

## Özellikler

- ✅ Yemek kategorileri
- ✅ Tarif detayları (malzemeler, talimatlar, pişirme süresi)
- ✅ Responsive tasarım
- ✅ API tabanlı veri yönetimi
- ✅ SQLite veritabanı

## Teknolojiler

- **Backend**: Python, FastAPI, SQLAlchemy, SQLite
- **Frontend**: Next.js, React, Tailwind CSS

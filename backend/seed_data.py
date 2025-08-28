from database import SessionLocal
from models import Category, Recipe

def seed_data():
    db = SessionLocal()
    
    try:
        # Kategorileri ekle
        categories_data = [
            {
                "name": "Çorbalar",
                "description": "Çorbalar",
                "image_url": "images/corba.webp"
            },
            {
                "name": "Ana Yemek",
                "description": "Ana yemekler",
                "image_url": "images/anayemek.png"
            },
            {
                "name": "Salatalar",
                "description": "Salatalar",
                "image_url": "images/salata.webp"
            },
            {
                "name": "Tatlı",
                "description": "Tatlılar",
                "image_url": "images/tatlı.png"
            }
        ]
        
        for cat_data in categories_data:
            category = Category(**cat_data)
            db.add(category)
        
        db.commit()
        print("Kategoriler başarıyla eklendi!")
        
        # Tarifleri ekle
        recipes_data = [
            {
                "title": "Gingerbread Cookies",
                "description": "Geleneksel Christmas gingerbread kurabiyeleri",
                "ingredients": "Un, bal, tarçın, zencefil, yumurta, tereyağı",
                "instructions": "1. Malzemeleri karıştır\n2. Hamuru yoğur\n3. Kurabiye şekilleri kes\n4. 180°C'de 12-15 dakika pişir",
                "cooking_time": 30,
                "servings": 24,
                "difficulty": "Easy",
                "image_url": "",
                "category_id": 1
            },
            {
                "title": "Roasted Turkey",
                "description": "Geleneksel Thanksgiving hindi",
                "ingredients": "Hindi, tereyağı, otlar, limon, sarımsak",
                "instructions": "1. Hindi'yi marine et\n2. Otları ve limonu içine koy\n3. 165°C'de 3-4 saat pişir",
                "cooking_time": 240,
                "servings": 8,
                "difficulty": "Medium",
                "image_url": "",
                "category_id": 2
            },
            {
                "title": "Roasted Chicken",
                "description": "Geleneksel Thanksgiving hindi",
                "ingredients": "Hindi, tereyağı, otlar, limon, sarımsak",
                "instructions": "1. Hindi'yi marine et\n2. Otları ve limonu içine koy\n3. 165°C'de 3-4 saat pişir",
                "cooking_time": 240,
                "servings": 8,
                "difficulty": "Medium",
                "image_url": "",
                "category_id": 3
            },
            {
                "title": "Grilled Turkey",
                "description": "Geleneksel Thanksgiving hindi",
                "ingredients": "Hindi, tereyağı, otlar, limon, sarımsak",
                "instructions": "1. Hindi'yi marine et\n2. Otları ve limonu içine koy\n3. 165°C'de 3-4 saat pişir",
                "cooking_time": 240,
                "servings": 8,
                "difficulty": "Medium",
                "image_url": "",
                "category_id": 4
            }
        ]
        
        for recipe_data in recipes_data:
            recipe = Recipe(**recipe_data)
            db.add(recipe)
        
        db.commit()
        print("Tarifler başarıyla eklendi!")
        
    except Exception as e:
        print(f"Hata oluştu: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    seed_data()

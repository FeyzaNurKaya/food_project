from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from database import get_db
from models import Category, Recipe, CategoryBase, CategoryResponse, RecipeBase, RecipeResponse
from sqlalchemy.orm import joinedload
from models import RecipeWithCategoryResponse

router = APIRouter()

# Kategori endpoint'leri
@router.get("/categories", response_model=List[CategoryResponse])
async def get_categories(db: Session = Depends(get_db)):
    """Tüm kategorileri getir"""
    categories = db.query(Category).all()
    return categories

@router.post("/categories", response_model=CategoryResponse)
async def create_category(category: CategoryBase, db: Session = Depends(get_db)):
    """Yeni kategori oluştur"""
    db_category = Category(**category.dict())
    db.add(db_category)
    db.commit()
    db.refresh(db_category)
    return db_category

@router.get("/categories/{category_id}", response_model=CategoryResponse)
async def get_category(category_id: int, db: Session = Depends(get_db)):
    """Belirli bir kategoriyi getir"""
    category = db.query(Category).filter(Category.id == category_id).first()
    if not category:
        raise HTTPException(status_code=404, detail="Kategori bulunamadı")
    return category

# Tarif endpoint'leri
@router.get("/recipes", response_model=List[RecipeResponse])
async def get_recipes(db: Session = Depends(get_db)):
    """Tüm tarifleri getir"""
    recipes = db.query(Recipe).all()
    return recipes

@router.get("/recipes-with-categories", response_model=List[RecipeWithCategoryResponse])
async def get_recipes_with_categories(db: Session = Depends(get_db)):
    """Tüm tarifleri kategori bilgileriyle birlikte getir"""
    recipes = db.query(Recipe).options(joinedload(Recipe.category)).all()
    return recipes

@router.get("/categories/{category_id}/recipes", response_model=List[RecipeResponse])
async def get_recipes_by_category(category_id: int, db: Session = Depends(get_db)):
    """Belirli bir kategorideki tarifleri getir"""
    recipes = db.query(Recipe).filter(Recipe.category_id == category_id).all()
    return recipes

@router.post("/recipes", response_model=RecipeResponse)
async def create_recipe(recipe: RecipeBase, db: Session = Depends(get_db)):
    """Yeni tarif oluştur"""
    # Kategori var mı kontrol et
    category = db.query(Category).filter(Category.id == recipe.category_id).first()
    if not category:
        raise HTTPException(status_code=404, detail="Kategori bulunamadı")
    
    db_recipe = Recipe(**recipe.dict())
    db.add(db_recipe)
    db.commit()
    db.refresh(db_recipe)
    return db_recipe

@router.get("/recipes/{recipe_id}", response_model=RecipeResponse)
async def get_recipe(recipe_id: int, db: Session = Depends(get_db)):
    """Belirli bir tarifi getir"""
    recipe = db.query(Recipe).filter(Recipe.id == recipe_id).first()
    if not recipe:
        raise HTTPException(status_code=404, detail="Tarif bulunamadı")
    return recipe

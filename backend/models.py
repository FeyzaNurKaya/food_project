from sqlalchemy import Column, Integer, String, Text, ForeignKey, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from datetime import datetime
from pydantic import BaseModel, ConfigDict, field_serializer

Base = declarative_base()

class Category(Base):
    __tablename__ = 'categories'
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), unique=True, index=True)
    description = Column(Text, nullable=True)
    image_url = Column(String(500), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Tariflerle ilişki. Bir kategoride birden fazla tarif olabilir.
    recipes = relationship("Recipe", back_populates="category")

class Recipe(Base):
    __tablename__ = 'recipes'
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), index=True)
    description = Column(Text, nullable=True)
    ingredients = Column(Text, nullable=False)
    instructions = Column(Text, nullable=False)
    cooking_time = Column(Integer, nullable=True)  # in minutes
    servings = Column(Integer, nullable=True)
    difficulty = Column(String(50), nullable=True)  # Easy, Medium, Hard
    image_url = Column(String(500), nullable=True)
    category_id = Column(Integer, ForeignKey('categories.id'))
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationship with category
    category = relationship("Category", back_populates="recipes")

# Pydantic models for API
class CategoryBase(BaseModel):
    name: str
    description: str = None
    image_url: str = None

class CategoryResponse(CategoryBase):
    id: int
    created_at: datetime
    
    @field_serializer('created_at')
    def serialize_datetime(self, v):
        return v.isoformat() if v else None
    
    model_config = ConfigDict(from_attributes=True)

class RecipeBase(BaseModel):
    title: str
    description: str = None
    ingredients: str
    instructions: str
    cooking_time: int = None
    servings: int = None
    difficulty: str = None
    image_url: str = None
    category_id: int

class RecipeResponse(RecipeBase):
    id: int
    created_at: datetime
    
    @field_serializer('created_at')
    def serialize_datetime(self, v):
        return v.isoformat() if v else None
    
    model_config = ConfigDict(from_attributes=True)

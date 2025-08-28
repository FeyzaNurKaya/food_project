export const getCategories = async () => {
    const response = await fetch('http://localhost:8000/api/v1/categories')
    const data = await response.json()
    return data
}

export const getRecipes = async () => {
    const response = await fetch('http://localhost:8000/api/v1/recipes')
    const data = await response.json()
    return data
}

export const getRecipesWithCategories = async () => {
    const response = await fetch('http://localhost:8000/api/v1/recipes-with-categories')
    const data = await response.json()
    return data
}
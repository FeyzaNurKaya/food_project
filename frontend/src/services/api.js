export const getCategories = async () => {
    const response = await fetch('http://localhost:8000/api/v1/categories')
    const data = await response.json()
    return data
}
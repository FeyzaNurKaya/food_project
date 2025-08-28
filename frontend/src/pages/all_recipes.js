import React, { useEffect, useState } from 'react'
import Layout from '@/components/Layout/Layout'
import Image from 'next/image'
import { getRecipesWithCategories } from '@/services/api'

const AllRecipes = () => {

    const [recipes, setRecipes] = useState([])
    const [filteredRecipes, setFilteredRecipes] = useState([])
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const fetchRecipes = async () => {
        getRecipesWithCategories()
          .then(recipes => {
            setRecipes(recipes)
            setFilteredRecipes(recipes)
          })
          .catch(error => {
            console.error('Tarifler yüklenirken hata oluştu:', error)
            setRecipes([])
            setFilteredRecipes([])
          })
    }

    useEffect(() => {
        fetchRecipes()
    }, [])

    const handleSearch = (term) => {
        setSearchTerm(term)
        if (term.trim() === '') {
            setFilteredRecipes(recipes)
        } else {
            const filtered = recipes.filter(recipe => 
                recipe.title.toLowerCase().includes(term.toLowerCase()) ||
                recipe.description.toLowerCase().includes(term.toLowerCase()) ||
                recipe.category?.name.toLowerCase().includes(term.toLowerCase())
            )
            setFilteredRecipes(filtered)
        }
    }

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen)
        if (!isSearchOpen) {
            setSearchTerm('')
            setFilteredRecipes(recipes)
        }
    }

    const clearSearch = () => {
        setSearchTerm('')
        setFilteredRecipes(recipes)
        setIsSearchOpen(false)
    }

    const categories = [...new Set(recipes.map(recipe => recipe.category?.name).filter(Boolean))]

  return (
    <Layout>
        <div className='container mx-auto px-4 mt-48 mb-8'>
            <div className='flex justify-center items-center mb-16 border-b-2 border-black'>
                <Image
                    src="/images/allrecipe.png"
                    alt="all recipes"
                    width={200}
                    height={200}
                    className='w-72 h-54 object-center mb-16'
                />
            </div>

            <div className='flex justify-between items-center mb-8 pb-4 border-b border-gray-200 w-full max-w-4xl mx-auto'>
                <div className='flex space-x-12'>
                    <span className='text-gray-700 hover:text-black cursor-pointer text-lg font-medium'>
                        Tüm Tarifler
                    </span>
                    {categories.map((category, index) => (
                        <span key={index} className='text-gray-700 hover:text-black cursor-pointer text-lg font-medium'>
                            {category}
                        </span>
                    ))}
                </div>
                <div className='flex justify-center items-center'>
                    {!isSearchOpen ? (
                        <i 
                            className="ri-search-2-line text-gray-600 hover:text-black cursor-pointer text-xl"
                            onClick={toggleSearch}
                        ></i>
                    ) : (
                        <div className='flex items-center space-x-2 bg-white border-b border-gray-300 pb-1'>
                            <i className="ri-search-2-line text-gray-600 text-lg"></i>
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => handleSearch(e.target.value)}
                                className='outline-none text-gray-700 placeholder-gray-400 min-w-[150px]'
                                autoFocus
                            />
                            <i 
                                className="ri-close-line text-gray-600 hover:text-black cursor-pointer text-lg"
                                onClick={clearSearch}
                            ></i>
                        </div>
                    )}
                </div>
            </div>

            <div className='flex flex-col items-center space-y-10 border-b-2 border-black mb-10'>
                {filteredRecipes.map((recipe) => (
                    <div key={recipe.id} className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 w-full max-w-4xl'>
                        <div className='h-72 bg-gray-200 relative'>
                            <Image 
                                src={recipe.image_url} 
                                alt={recipe.title} 
                                fill 
                                className='object-cover' 
                            />
                        </div>
                        <div className='p-6'>
                            <h3 className='text-xl font-semibold text-gray-800 mb-3 line-clamp-2'>
                                {recipe.title}
                            </h3>
                            <p className='text-base text-gray-600 line-clamp-3 mb-4'>
                                {recipe.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Layout>
  )
}

export default AllRecipes
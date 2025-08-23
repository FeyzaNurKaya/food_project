import React, { useState, useEffect } from 'react'
import { getCategories } from '@/services/api'

const TopSelection = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    getCategories()
      .then(categories => {
        setCategories(categories)
      })
      .catch(error => {
        console.error('Kategoriler yüklenirken hata oluştu:', error)
        setCategories([])
      })
  }

  return (
    <div className='container mx-auto px-6'>
      <h2 className='flex justify-center items-center text-2xl font-bold mt-48 mb-12'>
        Feyza'nın Yemek Tariflerine Hoşgeldiniz
      </h2>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {categories.map((category) => (
          <div 
            key={category.id} 
            className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-500 cursor-pointer '
          >
            <div className='h-48 bg-gray-200 relative'>
              {category.image_url && (
                <img 
                  src={category.image_url} 
                  alt={category.name}
                  className='w-full h-full object-cover '
                />
              )}
            </div>
            <div className='p-4'>
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                {category.name}
              </h3>
              <p className='text-gray-600 text-sm'>
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='container mx-auto border-b-2 border-black mt-24'></div>
      
      {categories.length === 0 && (
        <div className='text-center text-gray-500 mt-8'>
          Henüz kategori bulunmuyor. Backend'i çalıştırdığınızdan emin olun.
        </div>
      )}
    </div>
  )
}

export default TopSelection
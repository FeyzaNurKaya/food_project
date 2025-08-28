import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const [activePage, setActivePage] = useState('/')

  useEffect(() => {
    setActivePage(router.pathname)
  }, [router.pathname])

  const isActive = (path) => {
    return activePage === path
  }

  return (
    <div className='bg-white fixed top-0 left-0 right-0 z-50'>
      <div className='container mx-auto px-4 py-2 border-b-2 border-black'>
        <div className='flex justify-between items-center'>
          <div className="flex items-center space-x-10">
            <Image
              src="/images/logo.png"
              alt="Food Project Logo"
              width={120}
              height={120}
              className='w-32 h-32 object-contain cursor-pointer' 
              priority
              onClick={() => router.push('/')}
            />
          </div>

          <nav className="flex space-x-8 cursor-pointer">
            <a href="/" className={`text-headertext hover:text-headertext2 transition-colors ${isActive('/') ? 'underline underline-offset-4' : ''}`}>Anasayfa</a>
            <a href="/all_recipes" className={`text-headertext hover:text-headertext2 transition-colors ${isActive('/tarifler') ? 'underline underline-offset-4' : ''}`}>Bütün Tarifler</a>
            <a href="/hakkimizda" className={`text-headertext hover:text-headertext2 transition-colors ${isActive('/hakkimizda') ? 'underline underline-offset-4' : ''}`}>Hakkımızda</a>
            <a href="/iletisim" className={`text-headertext hover:text-headertext2 transition-colors ${isActive('/iletisim') ? 'underline underline-offset-4' : ''}`}>İletişim</a>
          </nav>

          <div className="flex space-x-4">
            <button className="text-headertext hover:text-headertext2 transition-colors">
              <i className="ri-facebook-fill text-xl"></i>
            </button>
            <button className="text-headertext hover:text-headertext2 transition-colors">
              <i className="ri-instagram-line text-xl"></i>
            </button>
            <button className="text-headertext hover:text-headertext2 transition-colors">
              <i className="ri-pinterest-fill text-xl"></i>
            </button>
            <button className="text-headertext hover:text-headertext2 transition-colors">
              <i className="ri-youtube-fill text-xl"></i>
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header
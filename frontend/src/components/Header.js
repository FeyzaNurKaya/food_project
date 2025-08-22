import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='bg-white'>
      <div className='container mx-auto px-4 py-2 border-b-2 border-black'>
        <div className='flex justify-between items-center'>
          <div className="flex items-center space-x-10">
            <Image
              src="/images/logo.png"
              alt="Food Project Logo"
              width={120}
              height={120}
              className='w-32 h-32 object-contain'
              priority
            />
          </div>

          <nav className="flex space-x-8">
            <a href="#" className="text-headertext hover:text-headertext2 transition-colors">Anasayfa</a>
            <a href="#" className="text-headertext hover:text-headertext2 transition-colors">Bütün Tarifler</a>
            <a href="/hakkimizda" className="text-headertext hover:text-headertext2 transition-colors">Hakkımızda</a>
            <a href="#" className="text-headertext hover:text-headertext2 transition-colors">İletişim</a>
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
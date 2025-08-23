import React, { useState } from 'react'
import Image from 'next/image'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [newsletter, setNewsletter] = useState(false)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    
    if (!email) {
      newErrors.email = 'Enter an email address like example@mysite.com.'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Enter an email address like example@mysite.com.'
    }
    
    if (!newsletter) {
      newErrors.newsletter = 'Check the box to continue.'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Form submitted:', { email, newsletter })
      setEmail('')
      setNewsletter(false)
      setErrors({})
    }
  }

  return (
    <div className='container mx-auto '>
            <div className='border-b-2 border-black mb-8'>
        <div className='flex justify-center items-center mt-16 mb-12'>
            <Image
                src="/images/mail.png"
                alt="mail"
                width={100}
                height={100}
                className='w-80 h-54 object-center'
            />
        </div>
        
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center mb-8'>
            <div className='flex flex-col mb-6'>
                <label className='text-headertext text-lg mb-2'>
                    Email *
                </label>
                <input 
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=''
                    required
                    className={`border-b-2 w-[440px] mt-2 focus:outline-none ${
                        errors.email ? 'border-red-500' : 'border-black hover:border-red-500 focus:border-red-500'
                    }`}
                />
                {errors.email && (
                    <div className='flex items-center mt-2 text-red-500 text-sm'>
                        <span className='mr-2'>⚠</span>
                        {errors.email}
                    </div>
                )}
            </div>

            <div className='flex flex-col mb-6'>
                <div className='flex items-center'>
                    <input 
                        type='checkbox'
                        id='newsletter'
                        checked={newsletter}
                        onChange={(e) => setNewsletter(e.target.checked)}
                        className={`mr-3 w-4 h-4 ${
                            errors.newsletter ? 'border-red-500' : 'border-black'
                        }`}
                    />
                    <label htmlFor='newsletter' className='text-headertext text-lg'>
                        Yes, subscribe me to your newsletter. *
                    </label>
                </div>
                {errors.newsletter && (
                    <div className='flex items-center mt-2 text-red-500 text-sm'>
                        <span className='mr-2'>⚠</span>
                        {errors.newsletter}
                    </div>
                )}
            </div>

            <button 
                type='submit'
                className='border-2 border-orange-400 bg-white text-orange-400 px-8 py-3 rounded hover:bg-orange-400 hover:text-white transition-colors'
            >
                Submit
            </button>
            <div className="flex space-x-4 mt-4">
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
        </form>
    </div>
    <p className='text-center text-headertext mb-8'>
       @2025 All rights reserved.
    </p>
    </div>
  )
}

export default Footer
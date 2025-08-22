import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
const AboutSection = () => {

    const router = useRouter()
    
  return (
    <div className='container mx-auto border-b-2 border-black mb-8'>
            <div className='flex justify-center items-center mb-16'>
                <Image
                    src="/images/about.png"
                    alt="chef mitt"
                    width={100}
                    height={100}
                    className='w-60 h-54 object-center'
                />
            </div>
        <div className='grid grid-cols-2 gap-8 items-center mb-16'>
            <div className='col-span-1'>
                <Image
                    src="/images/person.png"
                    alt="Theresa cooking"
                    width={500}
                    height={600}
                    className='w-full h-auto object-cover rounded-lg'
                />
            </div>
            
            <div className='col-span-1 space-y-6'>
                <h2 className='text-4xl font-serif italic text-teal-700 leading-tight'>
                    I'm Feyza<br/>
                    <span className=''>aka Mrs Frost</span>
                </h2>
                <p className='text-gray-500 text-lg leading-relaxed'>
                    I'm a paragraph. Click here to add your own text and edit me. It's easy. 
                    Just click "Edit Text" or double click me to add your own content and make changes to the font.
                    Feel free to drag and drop me anywhere you like on your page. 
                    I'm a great place for you to tell a story and let your users know a little more about you.
                </p>
                <button 
                onClick={() => router.push('/hakkimizda')}
                className='border-2 border-orange-400 bg-white text-orange-400 px-6 py-3 rounded-md hover:bg-orange-400 hover:text-white transition-colors duration-300'>
                    Hakkımda
                </button>
            </div>
        </div>
    </div>
  )
}

export default AboutSection
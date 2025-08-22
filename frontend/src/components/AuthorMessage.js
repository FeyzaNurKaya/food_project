import Image from 'next/image'
import React from 'react'

const AuthorMessage = () => {
  return (
    <div className='container mx-auto bg-white border-b-2 border-black mb-20'>
        <div className='flex justify-center items-center mt-20'>
            <Image
                src="/images/kalp.png"
                alt="kalp"
                width={100}
                height={100}
                className='w-54 h-54 object-center'
            />
        </div>
        <h2 className='flex justify-center items-center text-headertext text-3xl mt-12'>
        "This Is a Message from the Blogger, Write <br/> Something Inspirational for the Readers to Enjoy"
        </h2>
        <p className='flex justify-center items-center text-2xl mt-12 mb-20'>
        Love, <br/>
        Feyza
        </p>
    </div>
  )
}

export default AuthorMessage
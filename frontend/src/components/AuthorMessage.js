import Image from 'next/image'
import React from 'react'

const AuthorMessage = () => {
  return (
    <div className='conatiner mx-auto bg-white'>
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
        "This Is a Message from the Blogger, <br/> Write Something Inspirational for the Readers to Enjoy"
        </h2>
        <p className='flex justify-center items-center text-2xl mt-12'>
        Love, <br/>
        Feyza
        </p>
        <div className='border-b border-black container mx-auto mt-20'></div>
    </div>
  )
}

export default AuthorMessage
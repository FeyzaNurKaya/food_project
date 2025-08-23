import React, { useState } from 'react'
import Layout from '@/components/Layout/Layout'
import Image from 'next/image'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const iletisim = () => {

    const[formData, setFormData] = useState({
        name:'',
        surname:'',
        email:'',
        message:''
    }) 
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form verileri:', formData)
        
        toast.success('Form başarıyla gönderildi!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        })
        
        setFormData({
            name: '',
            surname: '',
            email: '',
            message: ''
        })
    }

  return (
    <Layout>
        <ToastContainer />
        <div className='container mx-auto mt-48 mb-8'>
            <div className='flex justify-center items-center border-b-2 border-black'>
                <Image
                    src="/images/contact.png"
                    alt="contact"
                    width={200}
                    height={100}
                    className='w-64 h-54 object-center mb-16'
                />
            </div>
            <div className='grid grid-cols-2 gap-12 mt-16'>
                <div className='col-span-1'>
                    <Image
                        src="/images/contactimage.png"
                        alt="contactımage"
                        width={500}
                        height={550}
                        className='w-full h-auto object-cover rounded-lg'
                    />
                </div>
                <div className='col-span-1'>
                    <h3 className='text-headertext text-3xl font-serif italic mt-24 p-4'>
                    Kaydolun ve Tüm Lezzetli Tariflerime Ulaşın
                    </h3>
                    <form onSubmit={handleSubmit}>
                       <div className='flex flex-row gap-8 mt-12 p-8'>
                       <span className='flex flex-col gap-2'>
                            <label htmlFor='name'>Adınız *</label>
                            <input 
                                type='text' 
                                id='name' 
                                name='name'
                                value={formData.name}
                                className='w-54 border-b-2 border-black p-2' 
                                required 
                                onChange={handleChange}
                            />
                        </span>
                        <span className='flex flex-col gap-2'>
                            <label htmlFor='surname'>Soyadınız *</label>
                            <input 
                                type='text' 
                                id='surname' 
                                name='surname'
                                value={formData.surname}
                                className='w-54 border-b-2 border-black p-2' 
                                required 
                                onChange={handleChange}
                            />
                        </span>
                       </div>
                       <div className='flex flex-col gap-2 p-8'>
                        <label htmlFor='email'>Email *</label>
                        <input 
                            type='email' 
                            id='email' 
                            name='email'
                            value={formData.email}
                            className='w-[470px] border-b-2 border-black p-2' 
                            required 
                            onChange={handleChange}
                        />
                       </div>
                       <div className='flex flex-col gap-2 p-8'>
                        <label htmlFor='message'>Mesajınızı buraya yazın...</label>
                        <textarea 
                            id='message' 
                            name='message'
                            value={formData.message}
                            className='w-[470px] border-b-2 border-black p-2' 
                            onChange={handleChange}
                        />
                       </div>
                       <div className='flex justify-end items-center p-8 pt-4 w-[500px] ml-8'>
                       <button 
                       type='submit' 
                       disabled={!formData.name || !formData.surname || !formData.email} 
                       className='bg-white border-2 w-36 border-black p-2 text-headertext hover:bg-black hover:text-white transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'>
                        Gönder
                        </button>
                       </div>
                    </form>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default iletisim
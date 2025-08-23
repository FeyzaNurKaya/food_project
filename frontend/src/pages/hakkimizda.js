import React from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout/Layout'

const hakkimizda = () => {
  return (
      <Layout>
        <div className='container mx-auto border-b-2 border-black mt-48 mb-8'>
            <div className='flex justify-center items-center mb-16 border-b-2 border-black'>
                <Image
                    src="/images/about.png"
                    alt="chef mitt"
                    width={100}
                    height={100}
                    className='w-60 h-54 object-center mb-16'
                />
            </div>
        <div className='grid grid-cols-2 gap-8 items-center mb-16'>
            <div className='col-span-1'>
                <Image
                    src="/images/meimages.png"
                    alt="feyza cooking"
                    width={500}
                    height={550}
                    className='w-full h-auto object-cover rounded-lg'
                />
            </div>
            
            <div className='col-span-1 space-y-6'>
                <h2 className='text-4xl font-serif italic text-teal-700 leading-tight'>
                    Selam Millet
                </h2>
                <p className='text-headertext text-lg leading-relaxed'>
                    Merhaba! Biz, lezzet tutkunları için özel yemek tarifleri sunan bir ekibiz.
                    
                    Amacımız, evde yemek yapmayı kolaylaştırmak ve herkesin mutfakta kendini rahat hissetmesini sağlamaktır. Deneyimli şeflerimiz ve yemek uzmanlarımızla birlikte, geleneksel Türk mutfağından modern dünya mutfağına kadar geniş bir yelpazede tarifler sunuyoruz.
                </p>  
                <p className='text-headertext text-lg leading-relaxed'>                   
                  Hikayemiz, mutfakta geçirdiğimiz keyifli anlardan ve paylaştığımız lezzetlerden ilham alıyor. Her tarif, özenle seçilmiş malzemeler ve adım adım açıklamalarla hazırlanıyor. Misafirlerimizin mutfakta başarılı olması ve sevdikleriyle güzel anılar biriktirmesi için çalışıyoruz.
                </p>
                <p className='text-headertext text-lg leading-relaxed'>
                    Siz de bu lezzet yolculuğuna katılmak ister misiniz? Tariflerimizi deneyin, deneyimlerinizi paylaşın ve mutfakta yeni keşifler yapın!
                </p>
            </div>
        </div>
    </div>
      </Layout>
  )
}

export default hakkimizda
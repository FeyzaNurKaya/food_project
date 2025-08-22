import React from 'react'
import Image from 'next/image'

const CooksImagesSection = () => {

    const cookImages = [
        { 
            id:1,
            image: "/mrsimages/cook1.png",
            name: "Chef Ahmet"
        },
        {
            id:2,
            image: "/mrsimages/cook2.png",
            name: "Chef Fatma"
        },
        {
            id:3,
            image: "/mrsimages/cook3.png",
            name: "Chef Mehmet"
        },
        {
            id:4,
            image: "/mrsimages/cook4.png",
            name: "Chef Ayşe"
        },
        {
            id:5,
            image: "/mrsimages/cook5.png",
            name: "Chef Ali"
        },
    ]

  return (
    <div className='container mx-auto border-b-2 border-black'>
        <div className='flex justify-center items-center mb-16'>
        <Image
            src="/mrsimages/top.png"
            alt="cooks"
            width={100}
            height={100}
            className='w-72 h-54 object-center'
        />
        </div>
        <div className='flex justify-between items-start gap-4 mb-16'>
            {cookImages.map((cook) => (
                <div key={cook.id} className="relative group">
                    <Image
                        src={cook.image}
                        alt="cooks"
                        width={200}
                        height={200}
                        className='w-auto h-auto object-center rounded-lg transition-all duration-300 group-hover:shadow-lg cursor-pointer'
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center cursor-pointer">
                        <p className="text-white text-lg font-semibold text-center px-2">{cook.name}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CooksImagesSection
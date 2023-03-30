import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const SliderItem = ({ img, title}) => {
  return (
    <>
      <div className='relative mx-auto h-auto w-auto duration-300 my-8 p-4'>
        <Link href="/">
          <Image className='h-auto w-auto' src={img} width={200} height={200} alt='sneakers' style={{objectFit: 'cover'}} priority />
        </Link>
        <p className='text-gray-500 tracking-wider py-4'>{title}</p>
      </div>
    </>
  )
}

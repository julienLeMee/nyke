import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const SliderItem = ({ position, img, name}) => {
  return (
    <>
      <div className='relative mx-auto h-auto w-auto duration-300 py-4 pl-4 inline-block group'>
        <Link href="/">
          <Image className='relative h-auto w-auto object-cover' src={img} width={200} height={200} alt='sneakers' priority />
          <p className='opacity-0 group-hover:opacity-100 duration-300 absolute top-[15%] right-[20%] rounded-2xl text-white text-center font-light py-1 px-4 bg-[#797D80]'>{position}</p>
          <p className='opacity-0 group-hover:opacity-100 duration-300 text-gray-500 pt-4'>{name}</p>
        </Link>
      </div>
    </>
  )
}

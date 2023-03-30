import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const SportItem = ({ position, img, title}) => {
  return (
    <>
      <div className='relative mx-auto h-auto w-auto duration-300 py-4 pl-4 inline-block group'>
        <Link href="/">
          <Image className='relative h-auto w-auto object-cover' src={img} width={200} height={200} alt='sneakers' priority />
          <p className='opacity-0 group-hover:opacity-100 duration-300 absolute top-[15%] right-[15%] rounded-3xl text-white text-center font-light py-2 px-4 bg-black/30'>{position}</p>
          <p className='opacity-0 group-hover:opacity-100 duration-300 text-2xl md:text-base text-black md:text-gray-500 pt-4'>{title}</p>
        </Link>
      </div>
    </>
  )
}

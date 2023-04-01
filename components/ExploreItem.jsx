import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsEye } from 'react-icons/bs'

export const ExploreItem = ({ img, genre }) => {
  return (
    <>
      <div className='relative mx-auto h-auto w-auto duration-300 py-4 pl-4 inline-block'>
        <Link href="/">
          <Image className='relative h-[400px] md:h-[535px] w-[300px] md:w-full object-cover' src={img} width={300} height={300} alt='sneakers' priority />
          <div className="absolute bottom-[10%] left-[12%] flex items-center">
            <p className='rounded-3xl text-black text-center font-medium py-2 px-5 bg-white'>{genre}</p>
            <div className="flex items-center rounded-3xl bg-white px-5 ml-2">
              <BsEye />
              <p className='text-black text-center font-medium py-2 ml-2'>Shop The Look</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

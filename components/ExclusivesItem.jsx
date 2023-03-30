import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const ExclusivesItem = ({ img, name, price, genre}) => {
  return (
    <>
      <div className='relative mx-auto h-auto w-auto duration-300 py-4 pl-4 inline-block'>
        <Link href="/">
          <Image className='relative h-[450px] w-[450px] object-cover' src={img} width={300} height={300} alt='sneakers' priority />
          <div className="flex items-center justify-between">
              <p className='duration-300 pt-4'>{name}</p>
            <p className='pt-4'>${price}</p>
          </div>
          <p className='text-gray-500 font-light'>{genre}'s Shoes</p>
        </Link>
      </div>
    </>
  )
}

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const ExclusivesItem = ({ img, name, price, genre}) => {
  return (
    <>
      <div className='relative mx-auto h-auto w-auto duration-300 py-4 pl-4 inline-block'>
        <Link href="/">
          <Image className='relative h-[350px] md:h-[450px] w-[350px] md:w-[450px] object-cover' src={img} width={300} height={300} alt='sneakers' priority />
          <div className="flex flex-col md:flex-row justify-between pt-4">
            <div>
              <p className='duration-300'>{name}</p>
              <p className='text-gray-500 font-light'>{genre}'s Shoes</p>
            </div>
            <p className='py-1 text-sm md:text-base'>${price}</p>
          </div>
        </Link>
      </div>
    </>
  )
}

import React from 'react'
import { BsBasket3 } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'

export const NavbarDown = () => {
  return (
    <>
      <div className="flex items-center justify-between w-[95%] mx-auto py-1">
        <div className='w-[80px]'>
          <img src="nike-logo.png" alt="air jordan logo" width={80} height={80} className='scale-x-[-1]' />
        </div>
        <div className='hidden lg:block'>
          <ul className='flex ml-52'>
            <li className='ml-4 p-2'>New & Featured</li>
            <li className='ml-4 p-2'>Men</li>
            <li className='ml-4 p-2'>Women</li>
            <li className='ml-4 p-2'>Kids</li>
          </ul>
        </div>
        <div className='flex items-center'>
          <div className='bg-gray-100 rounded-full hover:bg-black/10'>
            <div className='flex items-center mr-3'>
              <div className='p-2 rounded-full'>
                <CiSearch className='w-full h-full' size={20} />
              </div>
              <input placeholder='Search' type="text" className='border-none focus:outline-none bg-transparent rounded-full p-2 w-32' />
            </div>
          </div>
          <div className="rounded-full cursor-pointer hover:bg-black/10 mx-2">
            <AiOutlineHeart className='m-2' size={20} />
          </div>
          <div className="rounded-full cursor-pointer hover:bg-black/10 mx-2">
            <BsBasket3 className='m-2' size={20} />
          </div>
        </div>
      </div>
    </>
  )
}

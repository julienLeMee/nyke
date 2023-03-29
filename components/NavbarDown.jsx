import React from 'react'
import { BsBasket3 } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'

export const NavbarDown = () => {
  return (
    <>
      <div className="flex items-center justify-between px-6">
        <div className='flex items-center'>
          <img src="nike-logo.png" alt="air jordan logo" width={60} height={60} />
        </div>
        <div className='flex items-center'>
          <ul className='flex'>
            <li className='ml-4 p-2'>New & Featured</li>
            <li className='ml-4 p-2'>Men</li>
            <li className='ml-4 p-2'>Women</li>
            <li className='ml-4 p-2'>Kids</li>
          </ul>
        </div>
        <div className='flex items-center'>
          <BsBasket3 size={20} />
          <AiOutlineHeart className='ml-4' size={20} />
        </div>
      </div>
    </>
  )
}

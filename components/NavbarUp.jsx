import React from 'react'

export const NavbarUp = () => {
  return (
    <>
      <div className='bg-gray-100'>
        <div className="flex items-center justify-between w-[95%] mx-auto py-1">
          <div className='flex items-center'>
            <img src="air-jordan-logo.png" alt="air jordan logo" width={30} height={30} className='scale-x-[-1] cursor-pointer hover:opacity-60' />
            <img src="converse-logo.png" alt="air jordan logo" width={50} height={50} className='scale-x-[-1] cursor-pointer hover:opacity-60' />
          </div>
          <div className='flex items-center'>
            <ul className='flex'>
              <li className='text-xs px-4 cursor-pointer hover:text-black/60'>Find a store</li>
              <li className='text-xs px-4 cursor-pointer hover:text-black/60 border-black border-l-2'>Help</li>
              <li className='text-xs px-4 cursor-pointer hover:text-black/60 border-black border-l-2'>Join Us</li>
              <li className='text-xs px-4 cursor-pointer hover:text-black/60 border-black border-l-2'>Sign In</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

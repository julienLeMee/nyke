import React from 'react'

export const NavbarUp = () => {
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <div className='flex items-center'>
          <img src="air-jordan-logo.png" alt="air jordan logo" width={30} height={30} />
          <img src="converse-logo.png" alt="air jordan logo" width={50} height={50} />
        </div>
        <div className='flex items-center'>
          <ul className='flex'>
            <li className='text-center ml-4 px-4'>Find a store</li>
            <li className='text-center ml-4 px-4 border-black border-l-2'>Help</li>
            <li className='text-center ml-4 px-4 border-black border-l-2'>Join Us</li>
            <li className='text-center ml-4 px-4 border-black border-l-2'>Sign In</li>
          </ul>
        </div>
      </div>
    </>
  )
}

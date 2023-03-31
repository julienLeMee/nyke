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
          <div className='items-center inline-block'>
            <div className='flex'>
              <p className='text-xs px-4 cursor-pointer hover:text-black/60'>Find a store</p>
              <div className='relative group'>
                <p className='text-xs px-4 cursor-pointer hover:text-black/60 border-black border-l-2'>Help</p>
                {/* Drop down */}
                <div class="absolute top-4 right-0 p-4 z-10 bg-white hidden group-hover:block text-black w-64 h-auto">
                  <p className='mb-4 font-medium px-4'>Help</p>
                  <a href="http://www.julienlemee.com" class="block text-sm py-2 px-4 text-black/50 hover:text-black duration-200">Portfolio</a>
                  <a href="https://www.linkedin.com/in/julien-le-mee/" target="_blank" class="block text-sm py-2 px-4 text-black/50 hover:text-black duration-200">LinkedIn</a>
                  <a href="https://github.com/julienLeMee" target="_blank" class="block text-sm py-2 px-4 text-black/50 hover:text-black duration-200">Github</a>
                  <a href="http://www.julienlemee.com" class="block text-sm py-2 px-4 text-black/50 hover:text-black duration-200">Portfolio</a>
                  <a href="https://www.linkedin.com/in/julien-le-mee/" target="_blank" class="block text-sm py-2 px-4 text-black/50 hover:text-black duration-200">LinkedIn</a>
                  <a href="https://github.com/julienLeMee" target="_blank" class="block text-sm py-2 px-4 text-black/50 hover:text-black duration-200">Github</a>
                </div>
              </div>
              <p className='text-xs px-4 cursor-pointer hover:text-black/60 border-black border-l-2'>Join Us</p>
              <p className='text-xs px-4 cursor-pointer hover:text-black/60 border-black border-l-2'>Sign In</p>


            </div>


          </div>
        </div>
      </div>
    </>
  )
}

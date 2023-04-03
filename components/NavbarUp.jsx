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
              <div className='relative group duration-300'>
                <p className='text-xs px-4 cursor-pointer hover:text-black/60 border-black border-l-2'>Help</p>
                {/* Drop down */}
                <div class="absolute top-4 right-0 p-4 z-10 bg-white hidden group-hover:block text-black w-64 h-auto duration-300">
                  <p className='mb-4 font-medium px-4'>Help</p>
                  <a href="/" class="block text-sm py-1 px-4 text-black/50 hover:text-black duration-200 cursor-pointer">Order Status</a>
                  <a href="/" class="block text-sm py-1 px-4 text-black/50 hover:text-black duration-200 cursor-pointer">Dispatch & Delivery</a>
                  <a href="/" class="block text-sm py-1 px-4 text-black/50 hover:text-black duration-200 cursor-pointer">Returns</a>
                  <a href="/" class="block text-sm py-1 px-4 text-black/50 hover:text-black duration-200 cursor-pointer">Contact Us</a>
                  <a href="/" class="block text-sm py-1 px-4 text-black/50 hover:text-black duration-200 cursor-pointer">Privacy Policy</a>
                  <a href="/" class="block text-sm py-1 px-4 text-black/50 hover:text-black duration-200 cursor-pointer">Terms of Sale</a>
                  <a href="/" class="block text-sm py-1 px-4 text-black/50 hover:text-black duration-200 cursor-pointer">Terms of Use</a>
                  <a href="/" class="block text-sm py-1 px-4 text-black/50 hover:text-black duration-200 cursor-pointer">Send us Feedback</a>
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

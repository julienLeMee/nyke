import React from 'react'

export const Month = () => {
  return (
    <>
      <div className='p-4 md:px-9'>
        <div className='mx-auto py-2'>
          <p className='text-2xl tracking-wide font-medium text-black/80'>Month of Air</p>
        </div>
        <div className='mx-auto w-full relative'>
          <div>
            <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1344,c_limit/b138eafb-0204-4890-a555-a11414d1a982/nike-just-do-it.jpg" alt="sneakers" className='w-full h-full object-fill' />
          </div>
          <div className="absolute bottom-[20%] left-[4%] flex flex-col w-[50%]">
            <p className='text-white py-4 text-xl'>Get The lastest Air on the Nike App</p>
            <p className='rounded-3xl text-black text-center font-medium py-2 px-5 bg-white hover:bg-gray-400 w-40 duration-300 cursor-pointer'>Download Now</p>
          </div>
        </div>
      </div>
    </>
  )
}

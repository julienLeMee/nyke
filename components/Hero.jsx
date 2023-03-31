import Link from 'next/link'
import React from 'react'

export const Hero = () => {
  return (
    <>
      <div className='bg-gray-100'>
        <div className="flex flex-col items-center justify-center w-[95%] mx-auto py-1 text-sm">
          <p>Student discount</p>
          <p className='text-black/80 text-xs py-1'>
            10% off for students.
            <Link href='/' className='underline pl-1 text-black'>Discover</Link>
          </p>
        </div>
      </div>
      <div className='text-center p-8 mx-auto'>
        <p className='py-2'>Just in</p>
        <h1 className='font-bold text-5xl md:text-7xl'>NYKE AIR MAX PULSE</h1>
        <p className='py-8 tracking-wide'>Inspired by the energy of London’s music scene comes the Air Max Pulse. A tough silhouette infused with an unreal sensation of Air.</p>
        <button className='bg-black text-white py-2 px-6 rounded-full hover:bg-black/50'>Shop</button>
      </div>
      <video className='w-full h-full object-cover' autoPlay loop muted style={{ width: "100%", height: "100%" }}>
        <source src="air-max-pulse.mp4" type="video/mp4" />
      </video>
      {/* <img src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/ba743504-5a47-493e-a34b-e4a0b1981ec7/image.jpg" alt="air max" width={1920} height={1080} /> */}
    </>
  )
}

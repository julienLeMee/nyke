import React from 'react'

export const Hero = () => {
  return (
    <>
      <div className='text-center p-8 max-w-[95%] mx-auto'>
        <p className='py-2'>Just in</p>
        <h1 className='font-bold text-7xl'>NYKE AIR MAX PULSE</h1>
        <p className='py-8 tracking-wide'>Inspired by the energy of London’s music scene comes the Air Max Pulse. A tough silhouette infused with an unreal sensation of Air.</p>
        <button className='bg-black text-white py-2 px-6 rounded-full'>Shop</button>
      </div>
      <img src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/ba743504-5a47-493e-a34b-e4a0b1981ec7/image.jpg" alt="air max" width={1920} height={1080} />
      {/* <video
        className='mx-auto absolute top-0 left-0 z-[-1] rounded-lg w-full h-full object-cover'
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "100%", height: "100%" }}>
        <source src="https://www.nike.com/0be81cc8-f919-4c18-aa83-aee8b8e8667b" />
      </video> */}
    </>
  )
}

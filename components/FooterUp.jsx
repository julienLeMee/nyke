import React from 'react'

export const FooterUp = () => {
  return (
    <>
      <div className='w-full md:w-[60%] max-w-[95%] h-full mx-auto flex flex-col md:flex-row justify-around my-10'>

        <div className='flex flex-col'>
          <div className="p-2">
            <p className='font-medium text-black/80'>Shoes</p>
          </div>
          <div className="hidden md:block p-2">
            <ul className='sm:hidden md:block'>
              <li className='my-3 text-black/50 hover:text-black font-medium line-clamp-1'>Golf shoes</li>
              <li className='my-3 text-black/50 hover:text-black font-medium line-clamp-1'>Winter Trainers</li>
              <li className='my-3 text-black/50 hover:text-black font-medium line-clamp-1'>Gore Tex Trainers</li>
              <li className='my-3 text-black/50 hover:text-black font-medium line-clamp-1'>Walking trainers</li>
            </ul>
          </div>
        </div>

        <div className='flex flex-col'>
          <div className="p-2">
            <p className='font-medium text-black/80'>Clothing</p>
          </div>
          <div className="hidden md:block p-2">
            <ul className='sm:hidden md:block'>
              <li className='my-3 text-black/50 hover:text-black font-medium line-clamp-1'>All Clothing</li>
              <li className='my-3 text-black/50 hover:text-black font-medium line-clamp-1'>Yoga Trousers</li>
              <li className='my-3 text-black/50 hover:text-black font-medium line-clamp-1'>Tech Fleece Joggers</li>
              <li className='my-3 text-black/50 hover:text-black font-medium line-clamp-1'>Tech Fleece Pants</li>
            </ul>
          </div>
        </div>

        <div className='flex flex-col'>
          <div className="p-2">
            <p className='font-medium text-black/80'>Kids'</p>
          </div>
          <div className="hidden md:block p-2">
            <ul className='sm:hidden md:block'>
              <li className='my-3 text-black/50 hover:text-black font-medium line-clamp-1'>Kids' Sliders</li>
              <li className='my-3 text-black/50 hover:text-black font-medium line-clamp-1'>Kids' Tracksuit Sale</li>
              <li className='my-3 text-black/50 hover:text-black font-medium line-clamp-1'>Kids' Puffer Jacket</li>
            </ul>
          </div>
        </div>

        <div className='flex flex-col'>
          <div className="p-2">
            <p className='font-medium text-black/80'>Featured</p>
          </div>
          <div className="hidden md:block p-2">
            <ul className='sm:hidden md:block'>
              <li className='my-3 text-black/50 hover:text-black font-medium line-clamp-1'>Football Club Teams</li>
              <li className='my-3 text-black/50 hover:text-black font-medium line-clamp-1'>Football</li>
              <li className='my-3 text-black/50 hover:text-black font-medium line-clamp-1'>Nike Run Club</li>
              <li className='my-3 text-black/50 hover:text-black font-medium line-clamp-1'>Nike Training Club</li>
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}

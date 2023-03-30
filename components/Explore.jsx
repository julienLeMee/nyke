import React from 'react'
import { ExploreItem } from './ExploreItem'

export const Explore = () => {
  return (
    <>
      <div className="mb-10 md:px-6">
        <div className='px-4 py-2'>
          <p className='text-2xl tracking-wide font-medium text-black/80'>More to Explore</p>
        </div>
        <div className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative'>
          <ExploreItem
            genre='Women'
            img='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_550,c_limit/275a4902-b836-4d48-b54c-7d71689fce0b/nike-just-do-it.jpg'
          />
          <ExploreItem
            genre='Men'
            img='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_550,c_limit/9cd926fc-6297-4773-806c-950403f178ba/nike-just-do-it.jpg'
          />
          <ExploreItem
            genre='Kids'
            img='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_550,c_limit/817b89bc-0650-4207-b30c-99d877c73645/nike-just-do-it.jpg'
          />
        </div>
      </div>
    </>
  )
}

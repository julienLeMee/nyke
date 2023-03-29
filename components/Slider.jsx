import React from 'react'
import { SliderItem } from './SliderItem'

export const Slider = () => {
  return (
      <>
        <div className="pl-3 md:pl-8 lg:pl-14 mt-4">
          <div className="relative group">
            <div className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
              <SliderItem
                title='Air Max TW'
                img='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/5377c738-7cd6-4fe9-bb4c-ce9f41406cf8/nike-just-do-it.png'
              />
            </div>
          </div>
        </div>
    </>
  )
}

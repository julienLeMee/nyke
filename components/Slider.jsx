import React from 'react'
import { SliderItem } from './SliderItem'

export const Slider = () => {
  return (
    <>
      <div className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
        <SliderItem
          position='7/8'
          name='Air Max 270'
          img='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/14bc38c4-5979-4f80-b762-625d29375fd3/nike-just-do-it.png'
        />
        <SliderItem
          position='8/8'
          name='Air Max TW'
          img='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/5377c738-7cd6-4fe9-bb4c-ce9f41406cf8/nike-just-do-it.png'
        />
        <SliderItem
          position='1/8'
          name='Air Max Pulse'
          img='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/8318ac23-bd86-44fd-88f3-f21b435f41bb/nike-just-do-it.png'
        />
        <SliderItem
          position='2/8'
          name='Air Max Furyosa'
          img='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/b5c0fe85-935d-476a-aa65-a538e4c20311/nike-just-do-it.png'
        />
        <SliderItem
          position='3/8'
          name='Air Max 90'
          img='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/a4e31b52-6f35-485e-a085-7fa0fe4e3af4/nike-just-do-it.png'
        />
        <SliderItem
          position='4/8'
          name='Air Max Plus'
          img='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/9118bc53-fd8a-4dd3-beeb-4d5c31c7a67b/nike-just-do-it.png'
        />
        <SliderItem
          position='5/8'
          name='Air Max 97'
          img='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/0d1ec7bb-c77a-43d2-badd-2ff9da9ddc1c/nike-just-do-it.png'
        />
        <SliderItem
          position='6/8'
          name='Air Max 95'
          img='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/f0c8ffb7-6048-4204-9fd2-6da9426176a8/nike-just-do-it.png'
        />
      </div>
      {/* <div className="p-4">
        <div className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          <SliderItem
            name='Air Max TW'
            img='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/5377c738-7cd6-4fe9-bb4c-ce9f41406cf8/nike-just-do-it.png'
          />
        </div>
      </div> */}
    </>
  )
}

import React from 'react'
import { SportItem } from './SportItem'

export const Sport = () => {
  return (
    <>
    <div className='md:pl-6'>
      <div className='p-4 mx-auto py-2'>
        <p className='text-2xl tracking-wide font-medium text-black/80'>Shop By Sport</p>
      </div>
      <div className='w-full mx-auto h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
        <SportItem
          position='7/8'
          title='Yoga'
          img='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/ed6efa3d-bb62-4d41-89f1-49d01418fe49/nike-just-do-it.jpg'
        />
        <SportItem
          position='8/8'
          title='Skateboarding'
          img='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/1d2fd0c4-a7dd-4159-84c0-a0364c0990e3/nike-just-do-it.jpg'
        />
        <SportItem
          position='1/8'
          title='Football'
          img='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/5027a28c-3984-4287-94d1-ee6198238ce9/nike-just-do-it.jpg'
        />
        <SportItem
          position='2/8'
          title='Dance'
          img='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/11550514-c82b-46b2-afd8-e5dd62698371/nike-just-do-it.jpg'
        />
        <SportItem
          position='3/8'
          title='Running'
          img='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/3aef76c8-46c5-4f2a-a18c-3e9bdc148433/nike-just-do-it.jpg'
        />
        <SportItem
          position='4/8'
          title='Training'
          img='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/b4722f0f-c0e4-4a1b-8050-9f026ef947e9/nike-just-do-it.jpg'
        />
        <SportItem
          position='5/8'
          title='Tennis'
          img='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/5f432ab0-7ed1-48b9-b8c8-9eb3f5dcb63d/nike-just-do-it.jpg'
        />
        <SportItem
          position='6/8'
          title='Basketball'
          img='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/be13cfe4-b5a9-4c26-bee0-b716e98b099d/nike-just-do-it.jpg'
        />
      </div>
    </div>
    </>
  )
}

import React from 'react'
import { MembershipItem } from './MembershipItem'

export const Membership = () => {
  return (
    <>
      <div className='md:pl-6 my-10'>
        <div className='p-4 mx-auto py-2'>
          <p className='text-2xl tracking-wide font-medium text-black/80'>Nike Membership</p>
        </div>
        <div className='w-full mx-auto h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          <MembershipItem
            position='4/5'
            title='Join Member Experiences'
            img='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/c38f818b-6536-4c33-92ab-ae1ab3695fed/nike-just-do-it.png'
          />
          <MembershipItem
            position='5/5'
            title='More of Membership'
            img='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1440,c_limit/6d7f78c8-0280-42d7-bfde-1a8985be2b7b/nike-just-do-it.png'
          />
          <MembershipItem
            position='1/5'
            title='Acces Member Products'
            img='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/c73cc835-5320-41de-8e00-09b9e1d1b5c8/nike-just-do-it.jpg'
          />
          <MembershipItem
            position='2/3'
            title='Unlock Member Rewards'
            img='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/73b4ea93-aab8-46cc-b551-065ee89bd542/nike-just-do-it.png'
          />
          <MembershipItem
            position='3/5'
            title='Enjoy Sport & Wellbeing'
            img='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/0ab81f7c-aa67-4be4-98f8-64665115c150/nike-just-do-it.png'
          />
        </div>
      </div>
    </>
  )
}

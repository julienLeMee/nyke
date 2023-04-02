import React from 'react'
import { DropdownItem } from './DropdownItem'

export const Dropdown = ({ li, title }) => {
  return (
    <>
      <div className='group duration-300'>
        <p className='ml-4 p-2 border-transparent hover:border-black border-b-2 cursor-pointer duration-300'>{li}</p>
        {/* Drop down */}
          <div class="absolute w-screen top-15 left-[-3%] p-4 z-10 bg-white hidden group-hover:block text-black h-auto">
            <p className='mb-4 font-medium px-4'>{title}</p>
            <DropdownItem link="/" name="Portfolio" />
            <DropdownItem link="/" name="Linkdedin" />
            <DropdownItem link="/" name="Github" />
            <DropdownItem link="/" name="Twitter" />
          </div>
      </div>
    </>
  )
}

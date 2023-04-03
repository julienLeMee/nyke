import React from 'react'
import { DropdownItem } from './DropdownItem'

export const Dropdown = ({ title, link }) => {
  return (
    <>
      <div class="absolute w-screen top-15 left-[-3%] p-4 z-10 bg-white hidden group-hover:block text-black h-auto">
        <p className='mb-4 font-medium px-4'>{title}</p>
        <DropdownItem link="/" name={link} />
      </div>
    </>
  )
}

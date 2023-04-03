import React from 'react'
import { DropdownItem } from './DropdownItem'

export const Dropdown = ({ title, links=[] }) => {
  return (
    <>
    <div className='w-60'>
      <p className='mb-4 font-medium px-4'>{title}</p>
      {links.map((link, index) => (
        <DropdownItem key={index} link={link} />
      ))}
    </div>
    </>
  )
}

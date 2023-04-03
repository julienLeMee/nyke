import React from 'react'

export const DropdownItem = ({ link }) => {
  return (
    <>
      <a className='block text-sm py-1 px-4 text-black/50 hover:text-black duration-200 cursor-pointer' href={link.href}>{link.title}</a>
    </>
  )
}

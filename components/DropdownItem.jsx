import React from 'react'

export const DropdownItem = ({ link, name }) => {
  return (
    <>
      <a href={link} class="block text-sm py-2 px-4 text-black/50 hover:text-black duration-200">{name}</a>
    </>
  )
}

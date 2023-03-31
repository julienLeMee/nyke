import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { TfiYoutube } from 'react-icons/tfi'
import { ImInstagram } from 'react-icons/im'
import { IoMdPin } from 'react-icons/io'

export const FooterDown = () => {
  return (
    <>
      <div className='bg-black pt-8 px-8'>
        <div className='w-full flex justify-between mx-auto'>

        <div className='text-white w-full md:w-[70%] max-w-[95%] h-full flex flex-col md:flex-row'>

          <div className='flex flex-col mr-20'>
            <div className="p-2">
              <h6 className='uppercase text-xs tracking-widest'>Find a Store</h6>
            </div>
            <div className="p-2">
              <h6 className='uppercase text-xs tracking-widest'>Nike Journal</h6>
            </div>
            <div className="p-2">
              <h6 className='uppercase text-xs tracking-widest'>Become a Member</h6>
            </div>
            <div className="p-2">
              <h6 className='uppercase text-xs tracking-widest'>Feedback</h6>
            </div>
            <div className="p-2">
              <h6 className='font-medium uppercase text-xs'>Promocode</h6>
            </div>
          </div>

          <div className='flex flex-col mr-20'>
            <div className="p-2">
              <h6 className='uppercase text-xs tracking-widest'>Shoes</h6>
            </div>
            <div className="hidden md:flex p-2">
              <ul className='sm:hidden md:block'>
                <li className='mb-4 line-clamp-1 text-xs text-white/50 hover:text-white cursor-pointer'>Golf shoes</li>
                <li className='mb-4 line-clamp-1 text-xs text-white/50 hover:text-white cursor-pointer'>Winter Trainers</li>
                <li className='mb-4 line-clamp-1 text-xs text-white/50 hover:text-white cursor-pointer'>Gore Tex Trainers</li>
                <li className='mb-4 line-clamp-1 text-xs text-white/50 hover:text-white cursor-pointer'>Walking trainers</li>
                <li className='mb-4 line-clamp-1 text-xs text-white/50 hover:text-white cursor-pointer'>Walking trainers</li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col mr-20'>
            <div className="p-2">
              <h6 className='uppercase text-xs tracking-widest'>About Nike</h6>
            </div>
            <div className="hidden md:flex p-2">
              <ul className='sm:hidden md:block'>
                <li className='mb-4 line-clamp-1 text-xs text-white/50 hover:text-white cursor-pointer'>Golf shoes</li>
                <li className='mb-4 line-clamp-1 text-xs text-white/50 hover:text-white cursor-pointer'>Winter Trainers</li>
                <li className='mb-4 line-clamp-1 text-xs text-white/50 hover:text-white cursor-pointer'>Gore Tex Trainers</li>
                <li className='mb-4 line-clamp-1 text-xs text-white/50 hover:text-white cursor-pointer'>Walking trainers</li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col mr-20'>
            <div className="p-2">
              <h6 className='uppercase text-xs tracking-widest'>Join Us</h6>
            </div>
            <div className="hidden md:flex p-2">
              <ul className='sm:hidden md:block'>
                <li className='mb-4 line-clamp-1 text-xs text-white/50 hover:text-white cursor-pointer'>Golf shoes</li>
                <li className='mb-4 line-clamp-1 text-xs text-white/50 hover:text-white cursor-pointer'>Winter Trainers</li>
                <li className='mb-4 line-clamp-1 text-xs text-white/50 hover:text-white cursor-pointer'>Gore Tex Trainers</li>
                <li className='mb-4 line-clamp-1 text-xs text-white/50 hover:text-white cursor-pointer'>Walking trainers</li>
              </ul>
            </div>
          </div>

        </div>

        <div className="flex">
          <div className='bg-white/50 cursor-pointer hover:bg-white duration-300 rounded-full w-8 h-8 mr-4'>
            <BsTwitter width={30} height={30} className='w-full h-full p-2' />
          </div>
          <div className='bg-white/50 cursor-pointer hover:bg-white duration-300 rounded-full w-8 h-8 mr-4'>
            <FaFacebookF width={30} height={30} className='w-full h-full p-2' />
          </div>
          <div className='bg-white/50 cursor-pointer hover:bg-white duration-300 rounded-full w-8 h-8 mr-4'>
            <TfiYoutube width={30} height={30} className='w-full h-full p-2' />
          </div>
          <div className='bg-white/50 cursor-pointer hover:bg-white duration-300 rounded-full w-8 h-8'>
            <ImInstagram width={30} height={30} className='w-full h-full p-2' />
          </div>
        </div>

        </div>
        <div className="p-2">
          <div className="flex items-center justify-between pt-4">
            <div className="flex">
              <p className='text-white text-xs flex items-center'><IoMdPin className='mr-2' />Canada</p>
              <p className='text-white/50 hover:text-white cursor-pointer text-xs ml-6'>© 2023 Nyke, Inc. All Rights Reserved</p>
            </div>
            <div>
              <ul className="flex justify-end">
                <li className='text-white/50 hover:text-white cursor-pointer text-xs p-2 mr-2'>Guides</li>
                <li className='text-white/50 hover:text-white cursor-pointer text-xs p-2 mr-2'>Terms of Use</li>
                <li className='text-white/50 hover:text-white cursor-pointer text-xs p-2 mr-2'>Terms of Sale</li>
                <li className='text-white/50 hover:text-white cursor-pointer text-xs p-2 mr-2'>Company Details</li>
                <li className='text-white/50 hover:text-white cursor-pointer text-xs p-2 mr-2'>Privacy & Cookie Policy</li>
                <li className='text-white/50 hover:text-white cursor-pointer text-xs p-2 '>Cookie Settings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
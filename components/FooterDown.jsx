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

          <div className='flex flex-col w-full'>
            <div className="p-2">
              <h6 className='uppercase text-xs tracking-widest pb-1'>Find a Store</h6>
            </div>
            <div className="p-2">
              <h6 className='uppercase text-xs tracking-widest pb-1'>Nike Journal</h6>
            </div>
            <div className="p-2">
              <h6 className='uppercase text-xs tracking-widest pb-1'>Become a Member</h6>
            </div>
            <div className="p-2">
              <h6 className='uppercase text-xs tracking-widest pb-1'>Feedback</h6>
            </div>
            <div className="p-2">
              <h6 className='font-medium uppercase text-xs pb-1'>Promo codes</h6>
            </div>
          </div>

          <div className='flex flex-col w-full'>
            <div className="p-2">
              <h6 className='uppercase text-xs tracking-widest'>Get Help</h6>
            </div>
            <div className="hidden md:flex p-2">
              <ul className='sm:hidden md:block'>
                <li className='mb-4 line-clamp-1 text-xs text-white/50 hover:text-white cursor-pointer font-light'>Order Status</li>
                <li className='mb-4 line-clamp-1 text-xs text-white/50 hover:text-white cursor-pointer font-light'>Shipping and Delivery</li>
                <li className='mb-4 line-clamp-1 text-xs text-white/50 hover:text-white cursor-pointer font-light'>Returns</li>
                <li className='mb-4 line-clamp-1 text-xs text-white/50 hover:text-white cursor-pointer font-light'>Payment Options</li>
                <li className='mb-4 line-clamp-1 text-xs text-white/50 hover:text-white cursor-pointer font-light'>Contact Us</li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col w-full'>
            <div className="p-2">
              <h6 className='uppercase text-xs tracking-widest'>About Nike</h6>
            </div>
            <div className="hidden md:flex p-2">
              <ul className='sm:hidden md:block'>
                <li className='mb-4 line-clamp-1 text-xs text-white/50 hover:text-white cursor-pointer font-light'>News</li>
                <li className='mb-4 line-clamp-1 text-xs text-white/50 hover:text-white cursor-pointer font-light'>Careers</li>
                <li className='mb-4 line-clamp-1 text-xs text-white/50 hover:text-white cursor-pointer font-light'>Investors</li>
                <li className='mb-4 line-clamp-1 text-xs text-white/50 hover:text-white cursor-pointer font-light'>Sustainability</li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col w-full'>
            <div className="p-2">
              <h6 className='uppercase text-xs tracking-widest'>Join Us</h6>
            </div>
            <div className="hidden md:flex p-2">
              <ul className='sm:hidden md:block'>
                <li className='mb-4 line-clamp-1 text-xs text-white/50 hover:text-white cursor-pointer font-light'>Nike App</li>
                <li className='mb-4 line-clamp-1 text-xs text-white/50 hover:text-white cursor-pointer font-light'>Nike Run Club</li>
                <li className='mb-4 line-clamp-1 text-xs text-white/50 hover:text-white cursor-pointer font-light'>Nike Training Club</li>
                <li className='mb-4 line-clamp-1 text-xs text-white/50 hover:text-white cursor-pointer font-light'>SNKRS</li>
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
              <p className='text-white text-xs flex items-center font-light'><IoMdPin className='mr-2' />Canada</p>
              <p className='text-white/50 hover:text-white cursor-pointer text-xs ml-6 font-light'>© 2023 Nyke, Inc. All Rights Reserved</p>
            </div>
            <div>
              <ul className="flex justify-end">
                <li className='text-white/50 hover:text-white cursor-pointer font-light text-xs p-2 mr-2'>Guides</li>
                <li className='text-white/50 hover:text-white cursor-pointer font-light text-xs p-2 mr-2'>Terms of Use</li>
                <li className='text-white/50 hover:text-white cursor-pointer font-light text-xs p-2 mr-2'>Terms of Sale</li>
                <li className='text-white/50 hover:text-white cursor-pointer font-light text-xs p-2 mr-2'>Company Details</li>
                <li className='text-white/50 hover:text-white cursor-pointer font-light text-xs p-2 mr-2'>Privacy & Cookie Policy</li>
                <li className='text-white/50 hover:text-white cursor-pointer font-light text-xs p-2 '>Cookie Settings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

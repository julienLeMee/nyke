import React from 'react'
import { BsBasket3 } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import { BsChevronRight } from 'react-icons/bs'
import { useState } from 'react'
import { BsBoxSeam } from 'react-icons/bs'
import { IoStorefrontOutline } from 'react-icons/io5'
import { FiHelpCircle } from 'react-icons/fi'
import { Dropdown } from './Dropdown'

export const NavbarDown = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    document.body.style.overflow = nav ? 'auto' : 'hidden'
    setNav(!nav)
  }

  return (
    <>
    {nav && (
      <div
        className="fixed z-40 top-0 left-0 w-full h-full bg-black/20 bg-opacity-50 backdrop-blur-sm duration-500"
        onClick={handleNav}
      />
    )}
      <div className="relative flex items-center justify-between w-[95%] mx-auto py-1">
        <div className='w-[80px]'>
          <img src="nike-logo.png" alt="air jordan logo" width={80} height={80} className='scale-x-[-1] cursor-pointer hover:opacity-60' />
        </div>
        <div className='hidden lg:block'>
          <div className='flex ml-52'>
            {/* New & Featured */}
            <div className='group'>
              <p className='ml-4 p-2 border-transparent hover:border-black border-b-2 cursor-pointer'>New & Featured</p>
              {/* Drop down */}
                <div class="absolute w-screen top-15 left-[-3%] p-12 z-10 bg-white shadow-lg hidden group-hover:block text-black h-auto duration-300">
                  <div className="flex justify-center">
                    <Dropdown
                      title='Featured'
                      links={[
                        { title: 'Shop All New Arrivals', link: '/' },
                        { title: 'New Shoes', link: '/' },
                        { title: 'New Clothing', link: '/' },
                        { title: 'SNKRS Launch Calendar', link: '/' },
                        { title: 'Member Shop', link: '/' },
                        { title: 'Bestsellers', link: '/' },
                      ]}
                    />
                    <Dropdown
                      title='Shop Icons'
                      links={[
                        { title: 'Air Force 1', link: '/' },
                        { title: 'Air Jordan 1', link: '/' },
                        { title: 'Air Max', link: '/' },
                        { title: 'Dunk', link: '/' },
                        { title: 'Blazer', link: '/' },
                        { title: 'Pegasus', link: '/' },
                        { title: 'Mercurial', link: '/' },
                      ]}
                    />
                    <Dropdown
                      title='Best Reads'
                      links={[
                        { title: '.Swoosh', link: '/' },
                        { title: 'Jordan Collection', link: '/' },
                        { title: 'Nike SB - The Vault', link: '/' },
                        { title: 'Sustainability', link: '/' },
                        { title: 'Trained Podcast - Body Positivity', link: '/' },
                        { title: 'Never Done Making History - Tigerbelles', link: '/' },
                        { title: 'Bust Through Any Mental Blocks', link: '/' },
                      ]}
                    />
                    <Dropdown
                      title='Nike Stories'
                      links={[
                        { title: 'All Stories', link: '/' },
                        { title: 'Athletes*', link: '/' },
                        { title: 'Department of Nike Archives (DNA)', link: '/' },
                        { title: 'Coaching', link: '/' },
                        { title: 'Culture', link: '/' },
                        { title: 'Innovation', link: '/' },
                        { title: 'Community', link: '/' },
                      ]}
                    />
                  </div>
                </div>
            </div>
            {/* Men */}
            <div className='group'>
              <p className='ml-4 p-2 border-transparent hover:border-black border-b-2 cursor-pointer'>Men</p>
              {/* Drop down */}
                <div class="absolute w-screen top-15 left-[-3%] p-12 z-10 bg-white shadow-lg hidden group-hover:block text-black h-auto duration-300">
                  <div className="flex justify-center">
                    <Dropdown
                      title='Featured'
                      links={[
                        { title: 'New Releases', link: '/' },
                        { title: 'SNKRS Launch Calendar', link: '/' },
                        { title: 'Fleece Shop', link: '/' },
                        { title: 'Bestsellers', link: '/' },
                      ]}
                    />
                    <Dropdown
                      title='Shoes'
                      links={[
                        { title: 'All Shoes', link: '/' },
                        { title: 'Lifestyle', link: '/' },
                        { title: 'Jordan', link: '/' },
                        { title: 'Running', link: '/' },
                        { title: 'Football', link: '/' },
                        { title: 'Basketball', link: '/' },
                        { title: 'Training and Gym', link: '/' },
                        { title: 'Skateboarding', link: '/' },
                        { title: 'Nyke By You', link: '/' },
                      ]}
                    />
                    <Dropdown
                      title='Clothing'
                      links={[
                        { title: 'All Clothing', link: '/' },
                        { title: 'Hoodies and Sweatshirts', link: '/' },
                        { title: 'Tracksuits', link: '/' },
                        { title: 'Jackets', link: '/' },
                        { title: 'Trousers and Tights', link: '/' },
                        { title: 'Top and T-shirts', link: '/' },
                        { title: 'Shorts', link: '/' },
                        { title: 'Kits and Jerseys', link: '/' },
                      ]}
                    />
                    <Dropdown
                      title='Shop By Sport'
                      links={[
                        { title: 'All Sports', link: '/' },
                        { title: 'Running', link: '/' },
                        { title: 'Football', link: '/' },
                        { title: 'Basketball', link: '/' },
                        { title: 'Training and Gym', link: '/' },
                        { title: 'Tennis', link: '/' },
                        { title: 'Golf', link: '/' },
                      ]}
                    />
                    <Dropdown
                      title='Accessories and Equipment'
                      links={[
                        { title: 'All Accessories and Equipment', link: '/' },
                        { title: 'Bags and Backpacks', link: '/' },
                        { title: 'Socks', link: '/' },
                      ]}
                    />
                  </div>
                </div>
            </div>
            {/* Women */}
            <div className='group'>
              <p className='ml-4 p-2 border-transparent hover:border-black border-b-2 cursor-pointer'>Women</p>
              {/* Drop down */}
                <div class="absolute w-screen top-15 left-[-3%] p-12 z-10 bg-white shadow-lg hidden group-hover:block text-black h-auto duration-300">
                  <div className="flex justify-center">
                    <Dropdown
                      title='Featured'
                      links={[
                        { title: 'New Releases', link: '/' },
                        { title: 'SNKRS Launch Calendar', link: '/' },
                        { title: 'Fleece Shop', link: '/' },
                        { title: 'Bestsellers', link: '/' },
                      ]}
                    />
                    <Dropdown
                      title='Shoes'
                      links={[
                        { title: 'All Shoes', link: '/' },
                        { title: 'Lifestyle', link: '/' },
                        { title: 'Jordan', link: '/' },
                        { title: 'Running', link: '/' },
                        { title: 'Training and Gym', link: '/' },
                        { title: 'Nyke By You', link: '/' },
                      ]}
                    />
                    <Dropdown
                      title='Clothing'
                      links={[
                        { title: 'All Clothing', link: '/' },
                        { title: 'Hoodies and Sweatshirts', link: '/' },
                        { title: 'Jackets', link: '/' },
                        { title: 'Trousers', link: '/' },
                        { title: 'Leggings', link: '/' },
                        { title: 'Matching Sets', link: '/' },
                        { title: 'Top and T-Shirts', link: '/' },
                        { title: 'Shorts', link: '/' },
                        { title: 'Sports Bras', link: '/' },
                        { title: 'Skirts and dresses', link: '/' },
                      ]}
                    />
                    <Dropdown
                      title='Shop By Sport'
                      links={[
                        { title: 'All Sports', link: '/' },
                        { title: 'Running', link: '/' },
                        { title: 'Training and Gym', link: '/' },
                        { title: 'Tennis', link: '/' },
                        { title: 'Football', link: '/' },
                        { title: 'Yoga', link: '/' },
                        { title: 'Dance', link: '/' },
                      ]}
                    />
                    <Dropdown
                      title='Accessories and Equipment'
                      links={[
                        { title: 'All Accessories and Equipment', link: '/' },
                        { title: 'Bags and Backpacks', link: '/' },
                        { title: 'Socks', link: '/' },
                      ]}
                    />
                  </div>
                </div>
            </div>
            {/* Kids */}
            <div className='group'>
              <p className='ml-4 p-2 border-transparent hover:border-black border-b-2 cursor-pointer'>Kids</p>
              {/* Drop down */}
                <div class="absolute w-screen top-15 left-[-3%] p-12 z-10 bg-white shadow-lg hidden group-hover:block text-black h-auto duration-300">
                  <div className="flex justify-center">
                  <Dropdown
                      title='Featured'
                      links={[
                        { title: 'New Releases', link: '/' },
                        { title: 'Fleece Shop', link: '/' },
                        { title: 'Bestsellers', link: '/' },
                      ]}
                    />
                    <Dropdown
                      title='Shoes'
                      links={[
                        { title: 'All Shoes', link: '/' },
                        { title: 'Lifestyle', link: '/' },
                        { title: 'Jordan', link: '/' },
                        { title: 'Football', link: '/' },
                        { title: 'Running', link: '/' },
                        { title: 'Basketball', link: '/' },
                      ]}
                    />
                    <Dropdown
                      title='Clothing'
                      links={[
                        { title: 'All Clothing', link: '/' },
                        { title: 'Hoodies and Sweatshirts', link: '/' },
                        { title: 'Tracksuits', link: '/' },
                        { title: 'Trousers and Leggings', link: '/' },
                        { title: 'Jackets', link: '/' },
                        { title: 'Top and T-Shirts', link: '/' },
                        { title: 'Kits and Jerseys', link: '/' },
                        { title: 'Sport Clothing', link: '/' },
                        { title: 'Shorts', link: '/' },
                        { title: 'Sports Bras', link: '/' },
                        { title: 'Skirts and dresses', link: '/' },
                      ]}
                    />
                    <Dropdown
                      title='Kids by Age'
                      links={[
                        { title: 'Older Kids (7 - 15 years)', link: '/' },
                        { title: 'Younger Kids (3 - 7 years)', link: '/' },
                        { title: 'Baby and Toddler (0-3 years)', link: '/' },
                      ]}
                    />
                    <Dropdown
                      title='Accessories and Equipment'
                      links={[
                        { title: 'All Accessories and Equipment', link: '/' },
                        { title: 'Bags and Backpacks', link: '/' },
                        { title: 'Hats', link: '/' },
                      ]}
                    />
                  </div>
                </div>
            </div>

          </div>
        </div>

        <div className='flex items-center'>
          <div className='hidden lg:block bg-gray-100 rounded-full hover:bg-black/10'>
            <div className='flex items-center mr-3'>
              <div className='p-2 rounded-full'>
                <CiSearch className='w-full h-full' size={20} />
              </div>
              <input placeholder='Search' type="text" className='border-none focus:outline-none bg-transparent rounded-full p-2 w-32' />
            </div>
          </div>
          <div className="rounded-full cursor-pointer hover:bg-black/10 lg:ml-2">
            <AiOutlineHeart className='m-2' size={20} />
          </div>
          <div className="rounded-full cursor-pointer hover:bg-black/10 mx-2">
            <BsBasket3 className='m-2' size={20} />
          </div>
          {/* Mobile Button */}
          <div onClick={handleNav} className='lg:hidden rounded-full cursor-pointer hover:bg-black/10'>
            {nav ? <AiOutlineClose size={20} style={{color: 'white'}} className='hover:cursor-pointer m-2' /> : <AiOutlineMenu size={20} style={{color: 'black'}} className='hover:cursor-pointer m-2' />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={ nav ? 'fixed top-0 right-0 bottom-0 flex flex-col justify-between py-10 items-center w-[60%] h-screen bg-white ease-in duration-500 z-50' : 'fixed top-0 right-[-100%] bottom-0 flex flex-col justify-between py-10 items-center w-[60%] h-full bg-white ease-in duration-500 z-50'}>
        <div className="w-[80%] flex justify-end">
          <AiOutlineClose onClick={handleNav} size={40} style={{color: 'black'}} className='hover:cursor-pointer text-black/80 hover:bg-black/10 rounded-full p-2 duration-300' />
        </div>
        <div className="w-[80%] h-full flex flex-col">
          <ul className='w-full'>
            <li onClick={handleNav} className='text-black/80 rounded pl-2 p-1 text-xl font-semibold duration-300'>
              <div className="flex items-center py-2">
                <Link className='flex items-center cursor-pointer' href='/'>New & Featured</Link>
                <BsChevronRight className='ml-auto' size={20} />
              </div>
            </li>
            <li onClick={handleNav} className='text-black/80 rounded pl-2 p-1 text-xl font-semibold duration-300'>
              <div className="flex items-center py-2">
                <Link className='flex items-center cursor-pointer' href='/'>Men</Link>
                <BsChevronRight className='ml-auto' size={20} />
              </div>
            </li>
            <li onClick={handleNav} className='text-black/80 rounded pl-2 p-1 text-xl font-semibold duration-300'>
              <div className="flex items-center py-2">
                <Link className='flex items-center cursor-pointer' href='/'>Women</Link>
                <BsChevronRight className='ml-auto' size={20} />
              </div>
            </li>
            <li onClick={handleNav} className='text-black/80 rounded pl-2 p-1 text-xl font-semibold duration-300'>
              <div className="flex items-center py-2">
                <Link className='flex items-center cursor-pointer' href='/'>Kids</Link>
                <BsChevronRight className='ml-auto' size={20} />
              </div>
            </li>
            <div className='flex flex-col my-8'>
              <div className="flex items-center">
                <img src="air-jordan-logo.png" alt="air jordan logo" width={30} height={30} className='scale-x-[-1] ml-3' />
                <p className='ml-2'>Jordan</p>
              </div>
              <div className="flex items-center">
                <img src="converse-logo.png" alt="air jordan logo" width={50} height={50} className='scale-x-[-1]' />
                <p>Converse</p>
              </div>
            </div>
          </ul>
          <p className='text-black/50 font-medium text-xl mt-10'>
            Become a Nike Member for the best products, inspiration and stories in sport.
            <Link href='/' className='text-black'> Learn more</Link>
          </p>
          <div className="flex items-center my-6">
            <p className='rounded-3xl text-sm text-white text-center font-medium py-2 px-4 bg-black hover:bg-black/70 duration-300 cursor-pointer mr-2'>Join Us</p>
            <p className='rounded-3xl text-sm text-black text-center font-medium py-2 px-4 border-2 hover:border-black duration-300 cursor-pointer'>Sign In</p>
          </div>
          <ul className='my-2'>
            <li className='flex items-center my-4'>
              <BsBasket3 className='mr-2' size={20} />
              <p className='text-black/80'>Bag</p>
            </li>
            <li className='flex items-center my-4'>
              <BsBoxSeam className='mr-2' size={20} />
              <p className='text-black/80'>Oders</p>
            </li>
            <li className='flex items-center my-4'>
              <IoStorefrontOutline className='mr-2' size={20} />
              <p className='text-black/80'>Find a Store</p>
            </li>
            <li className='flex items-center my-4'>
              <FiHelpCircle className='mr-2' size={20} />
              <p className='text-black/80'>Help</p>
            </li>
          </ul>
        </div>
      </div>

    </>
  )
}

{/* <div class="absolute w-screen top-15 left-[-3%] p-4 z-10 bg-white hidden group-hover:block text-black h-auto">
      <p className='mb-4 font-medium px-4'>Help</p>
      <a href="/" class="block text-sm py-2 px-4 text-black/50 hover:text-black duration-200">Portfolio</a>
      <a href="/" target="_blank" class="block text-sm py-2 px-4 text-black/50 hover:text-black duration-200">LinkedIn</a>
      <a href="/" target="_blank" class="block text-sm py-2 px-4 text-black/50 hover:text-black duration-200">Github</a>
      <a href="/" class="block text-sm py-2 px-4 text-black/50 hover:text-black duration-200">Portfolio</a>
      <a href="/" target="_blank" class="block text-sm py-2 px-4 text-black/50 hover:text-black duration-200">LinkedIn</a>
      <a href="/" target="_blank" class="block text-sm py-2 px-4 text-black/50 hover:text-black duration-200">Github</a>
    </div> */}

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className='bg-white text-black px-10 py-5 mb-10'>
      
      <div className='border-y-2 border-solid border-black py-5 flex flex-row px-10 justify-between '>

      <div>
          <Image src="/assets/logo.jfif" alt="NITP Logo" width={100} height={100}  className='rounded-full'/>
      </div>
      
      <ul className='flex flex-wrap flex-row justify-around items-center w-6/12 font-bold'>
        <li>
          <Link href='/'>
          HOME
          </Link>
        </li>
        <li >
          <Link href="/about">
          ABOUT US
          </Link>
        </li>
        <li>
          <Link href={'/client'}>
          OUR RECRUITERS
        </Link>
        </li>
        {/* <li>
          REPORT BUG
        </li> */}
      </ul>
      </div>
      
      </div>
  )
}

export default Navbar;
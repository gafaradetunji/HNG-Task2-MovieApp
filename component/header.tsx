
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Search from './search'

const Header = () => {
  return (
    <div className='px-4 lg:flex items-center justify-between gap-4 w-[10rem] md:w-[40rem] lg:w-[65rem] lg:mx-auto'>
     <Link href={`/`} className='my-2 flex gap-3 ites-center'><Image src='/images/Logo.svg' alt='logo' width={40} height={40}/><span className='text-white'>Movie Box</span></Link>
     <div className='text-white my-2'><Search /></div>
     <Link href={`#`} className='text-white my-2 hidden lg:block'>Sign in</Link>
    </div>
  )
}

export default Header

import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import Link from 'next/link'


const Footer = () => {
  return (
    <div className='mt-[2.5rem] mt-[4rem] mb-[3rem] px-3'>
      <div className='flex items-center justify-center gap-6 mb-6'>
        <Link href={`#`}><FacebookIcon /></Link>
        <Link href={`#`}><InstagramIcon /></Link>
        <Link href={`#`}><TwitterIcon /></Link>
        <YouTubeIcon />
      </div>
      <div className='flex items-center justify-center gap-8 mb-6'>
        <Link href={`#`} className='text-[.85rem] md:text-[1.2rem]'><span>Conditions of Use</span></Link>
        <Link href={`#`} className='text-[.85rem] md:text-[1.2rem]'><span>Privacy & Policy</span></Link>
        <Link href={`#`} className='text-[.85rem] md:text-[1.2rem]'><span>Press Room</span></Link>
      </div>
      <p className='text-center text-[.85rem] md:text-[1.2rem]'>&copy; {new Date().getFullYear()} MovieBox by Adriana Eka Prayudha </p>
    </div>
  )
}

export default Footer

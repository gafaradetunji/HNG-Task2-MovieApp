"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './button'
import { Tabs as Tabs } from '../data/tabData'
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react'


const LeftSideBar = () => {
  const [ active, setActive ] = useState(1)
  const handleActive = (id: number) => {
    console.log(id)
    setActive(id);
  };


  return (
    <div className='hidden lg:block w-[14rem] py-8 px-8 rounded-r-[3rem] border-r-2'>
      <Link href={'/'} className='my-2 flex items-center w-full'>
        <Image src='/images/Logo.svg' alt='logo' width={35} height={35} />
        <h1 className='ml-3 font-medium font-sans text-[1rem]'>Movie Box</h1>
      </Link>
      <ul className='mt-[3rem]'>
          {Tabs.map((tab) => {
            const { id, icon, name } = tab;
            return (
              <li key={id}
                className={`${ active === id ? 'bg-[#be123c1a]' : '' } my-2 w-full h-[3rem] cursor-pointer`}
                onClick={() => handleActive(id)}>
                <Button className={`${ active === id ? 'text-[#BE123C]' : ''} flex items-center justify-center text-center`}>
                  <div className='ml-4 mt-2'>
                  <span className='me-4'>{icon}</span>
                  <span className={``}>{name}</span>
                  </div>
                </Button>
              </li>
            );
          })}
      </ul>
      <div className='font-poppins mt-[1rem] border-2 px-2 w-[10rem] h-[10rem] shadow-md rounded-[1.2rem] bg-[#f8e7eb66] flex flex-col items-center justify-center'>
        <p className='text-[.85rem] text-[#333333]'>Play movie quizes and earn free tickets</p>
        <span className='text-[#666] text-[.75rem]'>50k people are playing now</span>
        <div className='bg-[#BE123C33] rounded-md px-2'><Button className='text-[#BE123C] text-[.75rem]'>Start playing</Button></div>
      </div>
      <div className='mt-[4rem] w-full'><span><LogoutIcon className='text-[1.2rem] me-4'/></span><Button className='text-[1.2rem]'>Log out</Button></div>
   </div>
  )
}

export default LeftSideBar

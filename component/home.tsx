import React from 'react'
import Header from './header'
import MainMovie from './main-movie'
import Card from './card'
import Footer from './footer'

const HeroSection = () => {
  return (
    <div className='h-screen'>
        <div className='bg-hero-pattern bg-cover bg-center bg-no-repeat lg:h-[37.5rem] py-4'>
            <Header />
            <MainMovie />
        </div>
        <div>
          <div className='mt-[3rem] md:mt-[5rem] ml-[2rem] md:ml-[2.7rem] lg:ml-[6.2rem] font-sans w-full pb-12'>
            <h1 className='text-[1.5rem] md:text-[2.5rem] font-semibold'>Featured Movie</h1>
            <Card />
          </div>
        </div>
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default HeroSection

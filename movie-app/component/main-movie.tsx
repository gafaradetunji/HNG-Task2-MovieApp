import React from 'react'
import Image from 'next/image'
import Button from './button'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import GetAllMovies from '@/hooks/movies';


const MainMovie = async () => {

  const movieData: Promise<Movie[]> = GetAllMovies()

  const movies = await movieData
  const allMovies = movies.results
  const movie = allMovies[1]

  return (
    <div className='text-white mt-[1rem] lg:mt-[5rem] w-[15rem] lg:w-[25.5rem] h-[18rem] ml-[1.5rem] lg:ml-[8rem] font-sans'>
        <h1 className='lg:text-[2.5rem] font-semibold'>{movie.title}</h1>
        <div className='flex gap-8'>
            <div className='flex gap-2'>
                <Image src='/images/imbd.svg' alt='IMDB' width={15} height={12}/>
                <span>86.0 / 100</span>
            </div>
            <div className='flex gap-2'>
                <Image src='/images/rotten-tomato.svg' alt='Rotten Tomato' width={10} height={10}/>
                <span>97%</span>
            </div>
        </div>
        <div className='w-[21rem]'>
            <p className='text-[.7rem] lg:text-[.875rem] font-normal mt-4'>{movie.overview}</p>
        </div>
        <Button className='py-2 px-6 bg-[#BE123C] rounded-md mt-3 text-[.65rem] md:text-[.8rem] flex items-center gap-3'>
            <PlayCircleIcon />
            <span className='uppercase'>Watch trailer</span>
        </Button>
    </div>
  )
}

export default MainMovie

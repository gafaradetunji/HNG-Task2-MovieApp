import getMovie from "@/hooks/movie";
import LeftSideBar from '@/component/leftSideBar'
import Button from '@/component/button'
import type { Metadata } from "next";
import Image from 'next/image'
import Link from 'next/link'
import StarIcon from '@mui/icons-material/Star'
import ListIcon from '@mui/icons-material/List'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'

type Params = {
  params: {
    movieId: string;
  }
}

const poster_card = (poster_path: string) => {
    return `https://www.themoviedb.org/t/p/w500${poster_path}`
}


const convertToUtcDate = (localDateStr: string) => {
    const localDate = new Date(localDateStr);
    localDate.setHours(0, 0, 0, 0)
    const utcDate = new Date(localDate.getTime() - localDate.getTimezoneOffset() * 60000);
    return utcDate.toUTCString().replace('+0100', '');
};

const MovieById = async ({ params: { movieId }}: Params) => {

  const movie: Promise<Movie> = getMovie(movieId)
  const movieData = await movie
  console.log('movie Data', movieData)
  console.log('release-date', movieData.release_date)

  return (
    <div className='px-3'>
    <Link href={'/'} className='my-2 flex items-center w-full lg:hidden block'>
      <Image src='/images/Logo.svg' alt='logo' width={35} height={35} />
      <h1 className='ml-3 font-medium font-sans text-[1rem]'>Movie Box</h1>
    </Link>
    <div className='flex'>
     <LeftSideBar />
     <div className='container max-w-4xl h-screen mx-auto pt-6'>
     <div className='flex flex-col  my-5 pb-5'>
         <div className='md:w-[60rem] h-[28rem] w-full relative'>
           <div className='absolute inset-0 rounded-[2rem]'>
           <Image src={poster_card(movieData.backdrop_path)}
             alt='poster Image'
             fill
             objectFit='cover'
              className='rounded-[2rem]'
            />
           </div>
            <div className='absolute top-[50%] left-[50%] text-white'>
             <div><PlayCircleFilledIcon className='w-12 h-12'/></div>
             <p>Watch Trailer</p>
            </div>
         </div>

         <div className='md:flex'>
           <div className='font-poppins'>
            <span className='text-[#404040] font-semibold text-[.75rem] mt-6'><span data-testid='movie-title'>{movieData.title}</span> • <span data-testid='movie-release-date'>{convertToUtcDate(movieData.release_date)}</span> • PG-13 • <span data-testid='movie-runtime'>{movieData.runtime}</span></span>
            <span className='text-[#B91C1C] text-[.85rem] mx-4'>{movieData.genres[0]?.name}</span>
            <span className='text-[#B91C1C] text-[.85rem]'>{movieData.genres[1]?.name}</span>
            <p className='text-[#333] text-[.9rem] font-normal my-[2rem]' data-testid='movie-overview'>{movieData.overview}</p>
            <p className='text-[#BE123C]  text-[.85rem] my-[1.2rem]'><span className='text-[#333] font-medium'>Tagline :</span> {movieData.tagline}</p>
            <p className='text-[#BE123C] text-[.85rem] my-[1.2rem]'><span className='text-[#333] font-medium'>Popularity :</span>  {movieData.popularity}</p>
            <p className='text-[#BE123C] text-[.85rem] my-[1.2rem]'><span className='text-[#333] font-medium'>Budget:</span> {movieData.budget}</p>
            <div className='flex gap-6 items-center mb-8'>
             <Button className='bg-[#BE123C] text-white px-4 py-2 rounded-md text-[.85rem] font-semibold'>Top rated movie #65</Button>
             <p>Awards 9 nominations</p>
            </div>
           </div>
           <div className='w-full mb-8'>
             <div className='text-end'>
              <span className='text-yellow-500'><StarIcon /></span>
              <span><span className='text-[#ccc]'>8.5</span> | 350k</span>
             </div>
             <div className='my-4 w-[22rem] h-[4.5rem]'>
               <Button className='bg-[#BE123C] text-white px-4 my-2 py-2 block w-full rounded-md flex items-center justify-center'><Image src='/images/two-tickets.svg' alt='' width={30} height={30} /> See Showtimes</Button>
               <Button className='border-[1px] border-[#BE123C] mb-6 text-black w-full px-4 py-2 rounded-md'><ListIcon /> More watch options</Button>
              </div>
              <Image src='/images/best-movies.png' className='block mt-12' alt='movies' width={352} height={200} />
           </div>
         </div>
     </div>
     </div>
    </div>
    </div>
  )
}

export default MovieById

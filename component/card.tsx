import Image from 'next/image'
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from './button';
import Link from 'next/link';
import GetAllMovies from '@/hooks/movies'

const poster_card = (poster_path: string) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`
}

const convertToUtcDate = (localDateStr: string) => {
    const localDate = new Date(localDateStr);
    localDate.setHours(0, 0, 0, 0)
    const utcDate = new Date(localDate.getTime() - localDate.getTimezoneOffset() * 60000);
    return utcDate.toUTCString().replace('+0100', '');
};


const Card = async () => {
    const movieData: Promise<Movie[]> = GetAllMovies()

    const movies = await movieData
    const allMovies = movies.results
    const tenMovies = allMovies.slice(0, 10)



  return (
    <div className='flex gap-4 md:gap-6 lg:gap-8 flex-wrap w-[25rem] md:w-[50rem] lg:w-[70rem]'>
        { tenMovies.map((item: any) => (
          <div className='relative mt-[2rem] w-[10rem] md:w-[15rem] h-[23rem] mb-[1rem] md:mb-[5rem]' key={item.id} data-testid='movie-card'>
          <div className='flex items-center justify-between absolute top-0 w-full pt-2 px-2 md:px-3 md:pt-4'>
              <p className='bg-[#F3F4F680] px-2 rounded-full text-[.6rem] text-[.7rem] text-[#111827]'>Tv Series</p>
              <Button
                className={`bg-[#F3F4F680] text-[.4rem] md:text-[.6rem] px-[.2rem] py-[.2rem] md:px-[.3rem] md:py-[.3rem] rounded-full text-white`}>
                <FavoriteIcon />
              </Button>
          </div>
            <Link href={`/movies/${item.id}`}>
                <Image src={poster_card(item.poster_path)} alt={item.title} width={240} height={500} data-testid='movie-poster' />

                <div>
                    <span className='text-[#9CA3AF] text-[.6rem] md:text-[.8rem] font-medium mt-3 mb-5' data-testid='movie-release-date'>{convertToUtcDate(item.release_date)}</span>
                    <p className='text-[#111827] text-[.85rem] md:text-[1.125rem] font-semibold tracking-wide' data-testid='movie-title'>{item.title}</p>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-2'>
                            <Image src='/images/imbd.svg'm alt='IMDB' width={33} height={16}/>
                            <span className='text-[.6rem] md:text-[.8rem] text-[#111827] font-medium'>86.0/100</span>
                        </div>
                        <div className='flex gap-2'>
                            <Image src={'/images/rotten-tomato.svg'} alt='Rotten Tomato' width={16} height={16}/>
                            <span className='text-[.6rem] md:text-[.8rem] text-[#111827] font-medium'>97%</span>
                        </div>
                    </div>
                    <span className='text-[#9CA3AF] text-[.6rem] md:text-[.8rem] font-medium mt-3 mb-5'>Action, Adventure</span>
                </div>
            </Link>
            </div>
        ))}
    </div>
  )
}

export default Card

import SearchIcon from '@mui/icons-material/Search'
import Button from './button'

const Search = () => {
  return (
    <div>
      <form action="">
        <div className='lg:w-[25rem] w-[20rem] h-[3rem] border-2 flex items-center justify-between px-2'>
         <input type="text"
            className='placeholder:text-[.8rem] w-full outline-none bg-transparent text-white'
            name="search" id="search" placeholder="What do you want to watch?"/>
         <Button type="submit"><SearchIcon/></Button>
        </div>
     </form>
    </div>
  )
}

export default Search

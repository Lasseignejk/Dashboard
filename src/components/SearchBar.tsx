import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
  return (
    <div className='border-[1px] border-gray-300 flex h-10 items-center rounded-full px-3 mt-4'>
        <label htmlFor="search" className='text-gray-700'><FaSearch /></label>
        <input type="text" id='search' className='h-8 pl-2 w-96 rounded-full outline-none' placeholder='Search here' />
    </div>
  )
}

export default SearchBar
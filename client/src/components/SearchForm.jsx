import React from 'react'
import {FiSearch} from 'react-icons/fi'

const SearchForm = () => {
  return (
    <form className='w-full relative'>
      <input className='input' type='text' placeholder='Search' />
      <button className='btn btn-accent absolute top-0 right-0 rounded-tl-none rounded-bl-none'>
        <FiSearch className='text-xl' />
      </button>
    </form>
  )
}

export default SearchForm;
import React, { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState();
  const handleSerachInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm > 0) {
      navigate(`/search?query=${searchTerm}`)
    } else {
      console.log('Please search for something');
    }
  }

  return (
    <form onSubmit={handleSubmit} className='w-full relative'>
      <input 
        onChange={handleSerachInput}
        className='input' 
        type='text' 
        placeholder='Search' />
      <button className='btn btn-accent absolute top-0 right-0 rounded-tl-none rounded-bl-none'>
        <FiSearch className='text-xl' />
      </button>
    </form>
  )
}

export default SearchForm;
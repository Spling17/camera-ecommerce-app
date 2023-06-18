import React, { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    if (searchTerm.length > 0) {
      navigate(`/search?query=${searchTerm}`)
      document.querySelector('input').value = '';
      setSearchTerm('');
    } else {
      console.log('Please search for something');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-full relative'>
      <input 
        onChange={handleSearchInput}
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
import React from 'react'
import Logo from '../img/logo.png'
import { SlBag } from 'react-icons/sl'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import SearchForm from './SearchForm.jsx'
import CategoryNavMobile from './CategoryNavMobile.jsx'
import Cart from './Cart.jsx'


const Header = () => {
  return (
    <header>

      <div className="container mx-auto">
        {/* ----------- Menu ------------ */}
        <div>
          <FiMenu />
        </div>
        <div>
          <CategoryNavMobile />
        </div>
        <Link to={'/'}>
          <img src="{Logo}" alt="" />
        </Link>
        <div className='hidden w-full xl:max-w-[734px]'>
          <SearchForm />
        </div>
        {/* ----------- phone & cart ------------ */}
        <div>
          <div>Need help? 123-456-789</div>
          <div className='relative cursor-pointer'>
              <SlBag className='text-2xl'/>
              <div>2</div>
          </div>
          <div className='bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300'>
            <Cart />
          </div>
        </div>
        <div className="lg:hidden">
          <SearchForm />
        </div>
      </div>
    </header>
  )
}

export default Header;
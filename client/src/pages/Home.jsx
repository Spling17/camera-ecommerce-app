import React from 'react'
import LatestProducts from '../components/LatestProducts';
import Hero from '../components/Hero';
// import useFetch from '../hooks/useFetch'

const Home = () => {
  // const {data} = useFetch('/products?populate=*&filters[isNew]=true')

  // console.log(data);
  return (
    <section>     
      <Hero />
      <LatestProducts />
    </section>
  )
}

export default Home;
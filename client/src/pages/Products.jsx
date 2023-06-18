import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import CategoryNav from '../components/CategoryNav'
import Product from '../components/Product'

const Products = () => {
  const { id } = useParams();
  // console.log(id);
  const { data } = useFetch(`/products?populate=*&filters[category][id][$eq]=${id}`)
  console.log(data);
  return (
    <div className='mb-16 pt-40 lg:pt-0'>
      <div className='container mx-auto'>
        <div className=''>
          <CategoryNav />
          <main className=''>
            <div className=''>
              title
            </div>
            <div className=''>
              {data?.map((product) => {
                return (
                  <Product product={product} key={product.id} />
                )
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Products;
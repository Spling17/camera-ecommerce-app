// import { useState, useEffect } from 'react'
import React from "react"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import './App.css'

//import pages
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Search from './pages/Search.jsx'

//import components
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

//Layout
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children:[
      { path: '/', element: <Home />},
      { path: '/products/:id', element: <Products />},
      { path: '/product/:id', element: <ProductDetails />},
      { path: '/search/:id', element: <Search />},
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
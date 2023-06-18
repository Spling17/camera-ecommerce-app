// // import { useState, useEffect } from 'react'
// import React from "react"
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
// import './App.css'

import React from 'react';
import { RouterProvider, Outlet } from 'react-router-dom';
import Routes from './routes/index.jsx';
import './App.css';
import { Route, Switch } from 'react-router-dom';

// //import pages
import Home from '../pages/Home.jsx';
import Products from '../pages/Products.jsx';
import ProductDetails from '../pages/ProductDetails.jsx';
import Search from '../pages/Search.jsx';

// //import components
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

export default Routes;

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

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products/:id" component={Products} />
      <Route exact path="/product/:id" component={ProductDetails} />
      <Route exact path="/search" component={Search} />
    </Switch>
  );
};

// const router = createBrowserRouter([
//   {
//     element: <Layout />,
//     children:[
//       { path: '/', element: <Home />},
//       { path: '/products/:id', element: <Products />},
//       { path: '/product/:id', element: <ProductDetails />},
//       { path: '/search', element: <Search />},
//     ],
//   },
// ]);

// const App = () => {
//   return (
//     <div>
//       <RouterProvider router={router}/>
//     </div>
//   )
// }

const App = () => {
  return (
    <div>
      <RouterProvider>
        <Routes />
      </RouterProvider>
    </div>
  );
};

export default App;

export default App;
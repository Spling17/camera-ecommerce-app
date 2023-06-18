// // import { useState, useEffect } from 'react'
// import React from "react"
// import './App.css'

import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

//import pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/Search';

//import components
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products/:id" component={Products} />
          <Route exact path="/product/:id" component={ProductDetails} />
          <Route exact path="/search" component={Search} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// //Layout
// const Layout = () => {
//   return (
//     <div>
//       <Header />
//       <Outlet />
//       <Footer />
//     </div>
//   )
// }


// const Routes = () => {
//   return (
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <Route exact path="/products/:id" component={Products} />
//       <Route exact path="/product/:id" component={ProductDetails} />
//       <Route exact path="/search" component={Search} />
//     </Switch>
//   );
// };

// ReactDOM.render(
//   <Router>
//     <Routes />
//   </Router>,
//   document.getElementById('root')
// );

// const App = () => {
//   return (
//     <div>
//       <RouterProvider>
//         <Routes />
//       </RouterProvider>
//     </div>
//   );
// };

export default App;





// // ------------------------

// // const Routes = () => {
// //   return (
// //     <Switch>
// //       <Route exact path="/" component={Home} />
// //       <Route exact path="/products/:id" component={Products} />
// //       <Route exact path="/product/:id" component={ProductDetails} />
// //       <Route exact path="/search" component={Search} />
// //     </Switch>
// //   );
// // };




// ReactDOM.render(
//   <Router>
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <Route exact path="/products/:id" component={Products} />
//       <Route exact path="/product/:id" component={ProductDetails} />
//       <Route exact path="/search" component={Search} />
//     </Switch>
//   </Router>,
//   document.getElementById('root')
// );

// // const router = createBrowserRouter([
// //   {
// //     element: <Layout />,
// //     children:[
// //       { path: '/', element: <Home />},
// //       { path: '/products/:id', element: <Products />},
// //       { path: '/product/:id', element: <ProductDetails />},
// //       { path: '/search', element: <Search />},
// //     ],
// //   },
// // ]);

// // const App = () => {
// //   return (
// //     <div>
// //       <RouterProvider router={router}/>
// //     </div>
// //   )
// // }

// const App = () => {
//   return (
//     <div>
//       <RouterProvider>
//         <Routes />
//       </RouterProvider>
//     </div>
//   );
// };

// export default App;
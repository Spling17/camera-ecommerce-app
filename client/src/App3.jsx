import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

//import pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/Search';

//import components
import Header from './components/Header';
import Footer from './components/Footer';

//Layout
const Layout = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
};

{/* <RouterProvider router={router} /> */}

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import { RouterProvider } from "react-router-dom"
// import { BrowserRouter } from 'react-router-dom';
// // import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';

// //import pages
// import Home from './pages/Home';
// import Products from './pages/Products';
// import ProductDetails from './pages/ProductDetails';
// import Search from './pages/Search';

// //import components
// import Header from './components/Header'
// import Footer from './components/Footer'

// // Layout
// const Layout = () => {
//   return (
//     <div>
//       <Header />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/products/:id" component={Products} />
//         <Route path="/product/:id" component={ProductDetails} />
//         <Route path="/search" component={Search} />
//       </Switch>
//       <Footer />
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <Router>
//         <Layout />
//       </Router>
//     </div>
//   );
// };

// export default App;
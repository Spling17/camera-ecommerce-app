import React from 'react';
import ReactDOM from 'react-dom/client';
import App3 from './App3.jsx';
import './index.css';
import CartProvider from './context/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App3 />
    </CartProvider>
  </React.StrictMode>
);
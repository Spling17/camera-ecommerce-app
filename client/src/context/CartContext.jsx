import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [itemsAmount, setItemsAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

//cart amount
useEffect(() => {
  const amount = cart.reduce((a,c) => {
    return a + c.amount;
  }, 0);
  // console.log(amount);
  setItemsAmount(amount);
},[cart])

// add to cart
  const addToCart = (item, id) => {
    const itemID = parseInt(id);
    const newItem = { ...item[0], amount: 1 }
    setCart([...cart, newItem]); 

    const cartItem = cart.find((item) => {
      return item.id === itemID;
    });
    // console.log(cartItem);
    // console.log(id, item);
    // console.log(newItem);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === itemID) {
          setAmount(cartItem.amount + 1);
          return {...item, amount: cartItem.amount + 1}
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
    //open the cart sidebar
    setIsOpen(true)
    };
  // console.log(cart);

//remove from cart
  const removeFromCart = (id) => {
    // console.log(`item ${id} removed`);
    const newCart = cart.filter((item) => {
      return item.id !== id;
    })
    setCart(newCart);
  };

const handleInput = (e, id) => {
  // console.log(e.target.value);
  // console.log(id);
  const value = parseInt(e.target.value);
  const cartItem = cart.find((item) => {
    return item.id === id;
  });
  // console.log(cartItem);
  if (cartItem) {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        if (isNaN(value)) {
          setAmount(1)
          return {...item, amount: 1}
        } else {
            setAmount(value);
            return {...item, amount: value };
        }
      } else {
        return item;
      }
    })
    setCart(newCart)
  }
  setIsOpen(true);
  // console.log(cartItem);
};
// console.log(cart);

//handle select
const handleSelect = (e, id) => {
  console.log(e.target.value);
}
  
  return (
    <CartContext.Provider 
      value={{ 
        isOpen, 
        setIsOpen, 
        addToCart, 
        cart, 
        removeFromCart, 
        itemsAmount,
        handleInput,
        handleSelect,
        }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
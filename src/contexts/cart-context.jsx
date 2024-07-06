/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const defaultFunction = () => {
  throw new Error('Not implemented');
};

export const cartContext = createContext({
  cart: [],
  setCart: defaultFunction,
});

export const useCart = () => {
  const context = useContext(cartContext);
  return context;
};

export const CartProvider = (props) => {
   const [cart, setCart] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    return storedCart;
  });
  let values = {
    cart,
    setCart,
  };

  return (
    <cartContext.Provider value={values}>
      {props.children}
    </cartContext.Provider>
  );
};
// ShopContext.js
import React, { createContext, useReducer } from 'react';
import allProduct from './Assets/all_product';

// Create the context
export const ShopContext = createContext();

// Reducer function to manage cart
const initialState = {
  cart: [],
};
// reducer inside ShopContext.js
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { id, size } = action.payload;
      const itemIndex = state.cart.findIndex(
        item => item.id === id && item.size === size
      );

      if (itemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[itemIndex].quantity += 1;
        return { ...state, cart: updatedCart };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item, idx) => idx !== action.payload),
      };

    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((item, idx) =>
          idx === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((item, idx) =>
          idx === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    default:
      return state;
  }
};



// Provider component
const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = {
    allProduct,
    cart: state.cart,
    dispatch,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;

import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';
import './Cart.css';

const Cart = () => {
  const { cart, dispatch } = useContext(ShopContext);

  const handleRemove = (index) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: index });
  };

  const handleIncrement = (index) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: index });
  };

  const handleDecrement = (index) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: index });
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.new_price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Size</th>
                <th>Quantity</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.name}</td>
                  <td>
                    <img src={item.image} alt={item.name} className="cart-img" />
                  </td>
                  <td>${(item.new_price * item.quantity).toFixed(2)}</td>
                  <td>{item.size}</td>
                  <td>
                    <div className="qty-controls">
                      <button onClick={() => handleDecrement(idx)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleIncrement(idx)}>+</button>
                    </div>
                  </td>
                  <td>
                    <button className="remove-btn" onClick={() => handleRemove(idx)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Summary and Checkout */}
          <div className="cart-footer">
            <div className="cart-summary-box">
              <p className="summary-title">Subtotal</p>
              <p className="summary-items">Items: {cart.length}</p>
              <p className="summary-amount">Amount: ${totalPrice.toFixed(2)}</p>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

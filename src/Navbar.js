import React, { useContext } from 'react';
import './Navbar.css';
import cart from './cartt.jpg';
import { useNavigate, Link } from 'react-router-dom';
import { ShopContext } from './ShopContext'; // ✅ import context

const Navbar = () => {
  const navigate = useNavigate();
  const { cart: cartItems } = useContext(ShopContext); // ✅ get cart from context

  const handleLoginClick = () => {
    navigate('/signin');
  };

  // Calculate total quantity (e.g. 1 item x 2 quantity = 2)
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className='main-container'>
      <div className='logo'>
        <h1>Pape Corporation</h1>
      </div>
      <div className='lists'>
        <ul>
          <Link to="/men"><li>Man</li></Link>
          <Link to="/women"><li>Women</li></Link>
          <Link to="/kid"><li>Kids</li></Link>
        </ul>
      </div>
      <div className='last'>
        <button onClick={handleLoginClick}>Login</button>
        
        <Link to="/cart" className="cart-link">
          <img src={cart} alt='cart' className='cart-icon' />
          {cartItemCount > 0 && <span className='cart-count'>{cartItemCount}</span>}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

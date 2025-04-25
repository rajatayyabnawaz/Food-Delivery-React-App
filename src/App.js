// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Signin from './Signin'; // adjust path as needed
import Signup from './Signup';
import ShopCategory from './ShopCategory';
import Cart from './Cart';
import Footer from './Footer';
import kidb from './Assets/banner_kids.png';
import manb from './Assets/banner_mens.png';
import womenb from './Assets/banner_women.png';
import Product from './Product';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        
      <Route path="/men" element={<ShopCategory category="men" banner={manb} />} />
<Route path="/women" element={<ShopCategory category="women" banner={womenb} />} />
<Route path="/kid" element={<ShopCategory category="kid" banner={kidb} />} />
<Route path="/product/:id" element={<Product />} />

        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

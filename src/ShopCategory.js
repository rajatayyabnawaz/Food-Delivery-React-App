// ShopCategory.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- Import this
import { ShopContext } from './ShopContext';
import './Productcontext.css';

const ShopCategory = ({ category, banner }) => {
  const { allProduct } = useContext(ShopContext);
  const navigate = useNavigate(); // <-- For navigation

  const filteredProducts = allProduct.filter(
    (product) => product.category.toLowerCase() === category
  );

  const handleProductClick = (id) => {
    navigate(`/product/${id}`); // <-- Navigate to Product page with product ID
  };

  return (
    <div>
      <div className="category-banner">
        <img src={banner}  className="banner-image" />
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product.id)} // <-- Click to go to product
              style={{ cursor: 'pointer' }}
            >
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <div className="prices">
                <span className="new-price">${product.new_price}</span>
                <span className="old-price">${product.old_price}</span>
              </div>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ShopCategory;

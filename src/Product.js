import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from './ShopContext';
import './Product.css';

const Product = () => {
  const { id } = useParams();
  const { allProduct, dispatch } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);

  const product = allProduct.find((item) => item.id.toString() === id);

  if (!product) return <div>Product not found.</div>;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, size: selectedSize },
    });
  };

  return (
    <div className="product-detail-page">
      <div className="product-detail-card">
        <img src={product.image} alt={product.name} />

        <div className="product-detail-info">
          <div>
            <h2>{product.name}</h2>
            <p>
              <span className="price">${product.new_price}</span>
              <span className="old-price">${product.old_price}</span>
            </p>
            <p><strong>Category:</strong> {product.category}</p>

            {/* Size Selector */}
            <div className="size-options">
              <p>Size:</p>
              <div className="size-boxes">
                {['S', 'M', 'L', 'XL'].map(size => (
                  <div
                    key={size}
                    className={`size-box ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

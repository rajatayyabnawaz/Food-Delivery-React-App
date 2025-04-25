import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ShopProvider from './ShopContext'; // Notice the name change

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShopProvider>
      <App />
    </ShopProvider>
  </React.StrictMode>
);

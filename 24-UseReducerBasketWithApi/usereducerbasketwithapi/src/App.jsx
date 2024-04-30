import React, { useState } from 'react';
import ProductTable from './components/ProductTable';
import BasketCard from './components/BasketCard'; 
import "./App.css"

const App = () => {
  const [basketItems, setBasketItems] = useState([]);

  const handleAddToBasket = (product) => {
    const isAlreadyInBasket = basketItems.some(item => item.id === product.id);
    if (isAlreadyInBasket) {
      setIsSnackbarOpen(true);
    }
    else{
    setBasketItems([...basketItems, product])
    }
  };

  const handleRemoveFromBasket = (id) => {
    const updatedBasketItems = basketItems.filter(item => item.id !== id);
    setBasketItems(updatedBasketItems);
  };

  const handleClearBasket = () => {
    setBasketItems([]);
  };

  const handleIncreaseCount = (id) => {
    const updatedBasketItems = basketItems.map(item =>
      item.id === id ? { ...item, count: isNaN(item.count) ? 1 : item.count + 1 } : item
    );
    setBasketItems(updatedBasketItems);
  };
  
  const handleDecreaseCount = (id) => {
    const updatedBasketItems = basketItems.map(item =>
      item.id === id ? { ...item, count: isNaN(item.count) || item.count <= 1 ? 1 : item.count - 1 } : item
    );
    setBasketItems(updatedBasketItems);
  };
  
  return (
    <div>
      <ProductTable onAddToBasket={handleAddToBasket} />
      <div style={{ position: 'fixed', right: '10px', top: '10px', width: '250px', border: '1px solid #ccc', padding: '10px' }}>
        <h3>Basket (Cards)</h3>
        {basketItems.map(item => (
          <BasketCard 
            key={item.id} 
            item={item} 
            onRemoveItem={handleRemoveFromBasket} 
            onIncreaseCount={handleIncreaseCount} 
            onDecreaseCount={handleDecreaseCount} 
          />
        ))}
        <button onClick={handleClearBasket}>Clear Basket</button>
      </div>
    </div>
  );
};

export default App;


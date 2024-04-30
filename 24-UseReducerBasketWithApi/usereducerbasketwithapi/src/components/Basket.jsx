import React, { useState } from 'react';
import BasketCard from './BasketCard';
import "../assets/css/Basket.css"

const Basket = ({ items, onRemoveItem, onClearBasket, onIncreaseCount, onDecreaseCount }) => {
  const [totalPrice, setTotalPrice] = useState(calculateTotalPrice());

  const calculateTotalPrice = () => {
    const total = items.reduce((acc, item) => acc + item.unitPrice * item.count, 0);
    setTotalPrice(total);
  };

  return (
    <div>
      <h2>Basket</h2>
      {items.slice().reverse().map(item => (
        <BasketCard 
          key={item.id} 
          item={item} 
          onRemoveItem={onRemoveItem} 
          onIncreaseCount={onIncreaseCount} 
          onDecreaseCount={onDecreaseCount} 
        />
      ))}
      <p>Total Price: {totalPrice}</p>
      <button onClick={onClearBasket}>Clear Basket</button>
    </div>
  );
};

export default Basket;


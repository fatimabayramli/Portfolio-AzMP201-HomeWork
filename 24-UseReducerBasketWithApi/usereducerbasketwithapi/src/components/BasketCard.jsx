import React from 'react';

const BasketCard = ({ item, onRemoveItem, onIncreaseCount, onDecreaseCount }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '5px' }}>
      <p>{item.name} - {item.unitPrice}</p>
      <button onClick={() => onRemoveItem(item.id)}>Remove</button>
      <div>
        <button onClick={() => onDecreaseCount(item.id)}>-</button>
        <span>{item.count}</span>
        <button onClick={() => onIncreaseCount(item.id)}>+</button>
      </div>
      <p>Total Price: {item.unitPrice * item.count}</p>
    </div>
  );
};

export default BasketCard;

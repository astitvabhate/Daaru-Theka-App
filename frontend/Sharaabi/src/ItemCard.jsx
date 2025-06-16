import React from 'react';

const ItemCard = ({ item, children }) => (
  <div className="border p-4 mb-2 rounded shadow-sm flex justify-between items-center">
    <div>
      <h2 className="text-lg font-semibold">{item.name}</h2>
      <p className="text-sm text-gray-600">₹{item.price} | Qty: {item.quantity}</p>
    </div>
    <div>{children}</div>
  </div>
);

export default ItemCard;

// 

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AddItemForm from './AddItemForm';
import ItemCard from './ItemCard';

const AdminDashboard = () => {
  const { shopId } = useParams();
  const [items, setItems] = useState([
    { _id: "1", name: "Old Monk", price: 150, quantity: "750ml" },
    { _id: "2", name: "Breezer", price: 120, quantity: "330ml" },
  ]);

  const addItem = (newItem) => {
    setItems(prev => [...prev, { ...newItem, _id: Date.now().toString() }]);
  };

  const deleteItem = (id) => {
    setItems(prev => prev.filter(item => item._id !== id));
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard - Shop ID: {shopId}</h1>
      <AddItemForm onAdd={addItem} />
      <div className="mt-6">
        {items.map(item => (
          <ItemCard key={item._id} item={item}>
            <button
              onClick={() => deleteItem(item._id)}
              className="ml-4 text-red-600 hover:underline"
            >
              Delete
            </button>
          </ItemCard>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;

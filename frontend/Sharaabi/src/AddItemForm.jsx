import React, { useState } from 'react';

const AddItemForm = ({ shopId, onAdd }) => {
  const [form, setForm] = useState({ name: '', price: '', quantity: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/item`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, shopId })
    }).then(() => {
      setForm({ name: '', price: '', quantity: '' });
      onAdd();
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 max-w-md">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Item Name"
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="Price"
        type="number"
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="quantity"
        value={form.quantity}
        onChange={handleChange}
        placeholder="Quantity"
        type="number"
        className="w-full p-2 border rounded"
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Item
      </button>
    </form>
  );
};

export default AddItemForm;

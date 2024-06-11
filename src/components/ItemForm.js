import React, { useState } from "react";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  const handleNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setItemCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
    onItemFormSubmit(newItem);
    setItemName("");
    setItemCategory("Produce");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={itemName}
        onChange={handleNameChange}
        placeholder="Item name"
      />
      <select
        name="category"
        value={itemCategory}
        onChange={handleCategoryChange}
      >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Meat">Meat</option>
        <option value="Bakery">Bakery</option>
      </select>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;

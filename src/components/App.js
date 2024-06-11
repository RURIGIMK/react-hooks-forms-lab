import React, { useState } from "react";
import ItemList from "./ItemList";
import Filter from "./Filter";
import ItemForm from "./ItemForm";
import { v4 as uuid } from 'uuid';

function App() {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([
    { id: uuid(), name: "Yogurt", category: "Dairy" },
    { id: uuid(), name: "Lettuce", category: "Produce" },
    { id: uuid(), name: "Swiss Cheese", category: "Dairy" },
    { id: uuid(), name: "String Cheese", category: "Dairy" },
    // other initial items here
  ]);

  const handleSearchChange = (searchTerm) => {
    setSearch(searchTerm);
  };

  const handleItemFormSubmit = (newItem) => {
    setItems([...items, newItem]);
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <Filter search={search} onSearchChange={handleSearchChange} />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ItemList items={filteredItems} />
    </div>
  );
}

export default App;

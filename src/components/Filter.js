import React from "react";

function Filter({ search, onSearchChange }) {
  const handleInputChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={handleInputChange}
        placeholder="Search items..."
      />
    </div>
  );
}

export default Filter;

import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState(items)

  function categoryFilter(event) {
    const category = event.target.value
    console.log(category)
    
    const filteredList = items.filter(item => item.category === category)
    setSelectedCategory(filteredList)   
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={categoryFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

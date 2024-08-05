import React, { useState } from "react";

function Item({ name, category }) {
  const [cartItem, setCartItem] = useState(false)
  const buttonText = cartItem ? "Remove from Cart" : "Add to Cart"
  const listClass = cartItem ? "in-cart" : ""
  
  function itemClick() {
    console.log('click click!')
    setCartItem(!cartItem)
  }

  return (
    <li className={listClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={itemClick}>{buttonText}</button>
    </li>
  );
}

export default Item;

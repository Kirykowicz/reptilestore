import React from "react";

export default function AnimalDiv({ species, image, price }) {
  const addToCart = () => {
    setCart([...cart, species])
    setTotalPrice(totalPrice += price)
  }
  return (
    <div>
      <img src={image} alt={species} />
      <h3>{species}</h3>
      <button onClick={addToCart}>Add to Cart</button>
      <p>${price}</p>
    </div>
  );
}

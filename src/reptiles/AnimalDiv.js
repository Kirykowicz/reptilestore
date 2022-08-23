import React from "react";

export default function AnimalDiv({ animal, addAnimal }) {
  function addToCart() {
    fetch("http://localhost:8004/reptiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "cart",
        species: animal.species,
        image: animal.image,
        price: animal.price,
      }),
    })
      .then((res) => res.json())
      .then((res) => addAnimal(res));
  }
  return (
    <div className="animalDiv">
      <img src={animal.image} alt={animal.species} />

      <h3>{animal.species}</h3>

      <button onClick={addToCart}>Add to Cart</button>

      <p>${animal.price}</p>
    </div>
  );
}

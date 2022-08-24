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
    <div className="single-animal">
      <img src={animal.image} alt={animal.species} />
      <div>
        <div className="animal-info">
          <h4>{animal.species}</h4>
          <h4 className="animal-price">${animal.price}</h4>
        </div>
        <div className="description">
          <h3>Description</h3>
        </div>
        <div className="animal-description">
          <ul>
            <li>{animal.fact1}</li>
            <li>{animal.fact2}</li>
            <li>{animal.fact3}</li>
            <li>{animal.fact4}</li>
          </ul>
        </div>
        <button className="add-btn" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

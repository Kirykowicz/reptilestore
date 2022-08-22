import React from "react";

export default function AnimalDiv({ species, image, price }) {
  return (
    <div>
      <img src={image} alt={species} />
      <h3>{species}</h3>
      <p>${price}</p>
    </div>
  );
}

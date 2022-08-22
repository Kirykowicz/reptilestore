import React from "react";
import AnimalDiv from "./AnimalDiv";

export default function Snakes({ lizards }) {
  
  console.log(lizards)
  const lizardList = lizards.map((lizard) => {
    return <AnimalDiv key={lizard.id} species={lizard.species} image={lizard.image} price={lizard.price} />
  })

  return (
    <div>{lizardList}</div>
  );
}
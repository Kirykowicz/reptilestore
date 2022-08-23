import React from "react";
import AnimalDiv from "./AnimalDiv";

export default function Lizards({ lizards, addAnimal }) {
  console.log(lizards);
  const lizardList = lizards.map((lizard) => {
    return <AnimalDiv key={lizard.id} animal={lizard} addAnimal={addAnimal} />;
  });

  return <div>{lizardList}</div>;
}

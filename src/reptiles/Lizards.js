import React from "react";
import AnimalDiv from "./AnimalDiv";

export default function Lizards({ lizards, addAnimal }) {
  return (
    <section>
      <div className="title">
        <h2>Lizards</h2>
      </div>
      <div>
        {lizards.map((lizard) => (
          <AnimalDiv key={lizard.id} animal={lizard} addAnimal={addAnimal} />
        ))}
      </div>
    </section>
  );
}

import React from "react";
import AnimalDiv from "./AnimalDiv";

export default function Snakes({ snakes, addAnimal }) {
  return (
    <section>
      <div className="title">
        <h2>Snakes</h2>
      </div>
      <div>
        {snakes.map((snake) => (
          <AnimalDiv key={snake.id} animal={snake} addAnimal={addAnimal} />
        ))}
      </div>
    </section>
  );
}

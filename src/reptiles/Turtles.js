import React from "react";
import AnimalDiv from "./AnimalDiv";

export default function Turtles({ turtles, addAnimal }) {
  return (
    <section>
      <div className="title">
        <h2>Turtles</h2>
      </div>
      <div>
        {turtles.map((turtle) => (
          <AnimalDiv key={turtle.id} animal={turtle} addAnimal={addAnimal} />
        ))}
      </div>
    </section>
  );
}

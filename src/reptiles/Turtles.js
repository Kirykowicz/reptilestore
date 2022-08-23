import React from "react";
import AnimalDiv from "./AnimalDiv";

export default function Turtles({ turtles, addAnimal }) {
  console.log(turtles);
  const turtleList = turtles.map((turtle) => {
    return <AnimalDiv key={turtle.id} animal={turtle} addAnimal={addAnimal} />;
  });

  return <div>{turtleList}</div>;
}

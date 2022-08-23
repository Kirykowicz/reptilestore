import React from "react";
import AnimalDiv from "./AnimalDiv";

export default function Snakes({ snakes, addAnimal }) {
  console.log(snakes);
  const snakeList = snakes.map((snake) => {
    return <AnimalDiv key={snake.id} animal={snake} addAnimal={addAnimal} />;
  });

  return <div>{snakeList}</div>;
}

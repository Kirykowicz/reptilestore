import React from "react";
import AnimalDiv from "./AnimalDiv";

export default function Snakes({ snakes }) {
  
  console.log(snakes)
  const snakeList = snakes.map((snake) => {
    return <AnimalDiv key={snake.id} species={snake.species} image={snake.image} price={snake.price} />
  })

  return (
    <div>{snakeList}</div>
  );
}
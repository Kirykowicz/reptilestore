import React from "react";
import AnimalDiv from "./AnimalDiv";

export default function Turtles({ turtles }) {
  
  console.log(turtles)
  const turtleList = turtles.map((turtle) => {
    return <AnimalDiv key={turtle.id} species={turtle.species} image={turtle.image} price={turtle.price} />
  })

  return (
    <div>{turtleList}</div>
  );
}

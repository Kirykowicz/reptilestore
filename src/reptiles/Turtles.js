import React, { useState, useEffect } from "react";
import AnimalDiv from "./AnimalDiv";

export default function Turtles() {
  const [turtles, setTurtles] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/reptiles`)
      .then((res) => res.json())
      .then((res) => {
        setTurtles(res[0]);
        console.log(turtles);
      });
  }, []);

  return (
    <div>
      {turtles.map((turtle) => (
        <AnimalDiv animal={turtle} />
      ))}
    </div>
  );
}

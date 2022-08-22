import { useState, useEffect } from "react";

export default function Turtles() {
  const [turtles, setTurtles] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/reptiles`)
      .then((res) => res.json())
      .then((res) => setTurtles(res.turtles));
  }, []);

  console.log(turtles);

  return <h1>Here is where the turtles will go!{console.log(turtles)}</h1>;
}

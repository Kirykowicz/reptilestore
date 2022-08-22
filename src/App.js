import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Turtles from "./reptiles/Turtles";
import Snakes from "./reptiles/Snakes";
import Lizards from "./reptiles/Lizards";
import { Route, Routes } from "react-router-dom";
import Home from "./reptiles/Home";

function App() {
  const [turtles, setTurtles] = useState([]);
  const [snakes, setSnakes] = useState([]);
  const [lizards, setLizards] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8004/reptiles`)
      .then((res) => res.json())
      .then((data) => {
        setTurtles(data[0].turtles);
        setSnakes(data[1].snakes);
        setLizards(data[2].lizards);
      });
  }, []);

  return (
    <>
      <NavBar className="container" />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/turtles" element={<Turtles turtles={turtles} />} />
        <Route path="/lizards" element={<Lizards lizards={lizards} />} />
        <Route path="/snakes" element={<Snakes snakes={snakes} />} />
      </Routes>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Turtles from "./reptiles/Turtles";
import Snakes from "./reptiles/Snakes";
import Lizards from "./reptiles/Lizards";
import { Route, Routes } from "react-router-dom";
import Home from "./reptiles/Home";
import Cart from "./reptiles/Cart";

function App() {
  const [turtles, setTurtles] = useState([]);
  const [snakes, setSnakes] = useState([]);
  const [lizards, setLizards] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8004/reptiles`)
      .then((res) => res.json())
      .then((data) => {
        setTurtles(data.filter((reptile) => reptile.type === "turtle"));
        setSnakes(data.filter((reptile) => reptile.type === "snake"));
        setLizards(data.filter((reptile) => reptile.type === "snake"));
      });
  }, []);

  function addAnimal(animal) {
    fetch();
    setCart([...cart, animal]);
  }

  return (
    <>
      <NavBar className="container" />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/turtles" element={<Turtles turtles={turtles} />} />
        <Route path="/lizards" element={<Lizards lizards={lizards} />} />
        <Route path="/snakes" element={<Snakes snakes={snakes} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;

import NavBar from "./NavBar";
import Turtles from "./reptiles/Turtles";
import Snakes from "./reptiles/Snakes";
import Lizards from "./reptiles/Lizards";
import { Route, Routes } from "react-router-dom";
import Home from "./reptiles/Home";

function App() {
  return (
    <>
      <NavBar className="container" />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/turtles" element={<Turtles />} />
        <Route path="/lizards" element={<Lizards />} />
        <Route path="/snakes" element={<Snakes />} />
      </Routes>
    </>
  );
}

export default App;

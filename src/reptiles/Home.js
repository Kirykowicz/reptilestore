import React, { useState } from "react";
import "../App.css";

export default function Home({addNewReptile}) {
  const [type, setType] = useState("")
  const [species, setSpecies] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState(0.00)
  const [fact1, setFact1] = useState("")
  const [fact2, setFact2] = useState("")
  const [fact3, setFact3] = useState("")
  const [fact4, setFact4] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    let newReptile = {
      type,
      species,
      image,
      price,
      fact1,
      fact2,
      fact3,
      fact4
    }
    fetch("http://localhost:8004/reptiles", {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(newReptile)
    })
    .then(resp => resp.json())
    .then(addNewReptile(newReptile))

    setType("")
    setSpecies("")
    setImage("")
    setPrice(0.00)
    setFact1("")
    setFact2("")
    setFact3("")
    setFact4("")
  }

  return (
    <>
      <div className="background-home"></div>
      <div className="home-page">
        <div className="head-logo">
          <h1>Welcome to The Reptile Store</h1>
          <img src="https://i.pinimg.com/736x/28/f0/2c/28f02c2fbaf3032fb199b544e8d48af0--woodburning-lizards.jpg" alt="lizard logo" />
        </div>
        <h2>The place for all your reptile needs</h2>
        <h3>
          Shop our online store's huge selection of rare and exotic reptiles for sale.<br />
          You can buy live turtles, snakes, and lizards, all at unbeatable prices.<br />
          Every purchase comes with the Reptile Store live on arrival guarantee!<br />
          Every one of our Reptiles has been bred by professional Herpitologists with quality over quantity in mind.
        </h3>
      </div>
      <div className="new-reptile-form">
        <h2>New Reptile</h2>
        <form onSubmit={handleSubmit}>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Choose Type">Choose your type</option>
            <option value="turtle">Turtle</option>
            <option value="snake">Snake</option>
            <option value="lizard">Lizard</option>
          </select>
          <input type="text" name="species" placeholder="Species Name" value={species} onChange={(e) => setSpecies(e.target.value)} />
          <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
          <input type="number" name="price" step="1.00" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
          <input type="text" name="fact1" placeholder="1st Reptile Fact" value={fact1} onChange={(e) => setFact1(e.target.value)} />
          <input type="text" name="fact2" placeholder="2nd Reptile Fact" value={fact2} onChange={(e) => setFact2(e.target.value)} />
          <input type="text" name="fact3" placeholder="3rd Reptile Fact" value={fact3} onChange={(e) => setFact3(e.target.value)} />
          <input type="text" name="fact4" placeholder="4th Reptile Fact" value={fact4} onChange={(e) => setFact4(e.target.value)} />
          <button type="submit">Add Reptile To Listings</button>
        </form>
      </div>
    </>
  )
}

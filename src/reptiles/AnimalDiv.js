import React from "react";

export default function AnimalDiv({ animal }) {
  return (
    <div>
      <img src={animal.image} />
    </div>
  );
}

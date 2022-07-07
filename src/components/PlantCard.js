import React, { useState } from "react";

function PlantCard({ plant, onDeletePlant }) {
  const { id, name, image, price } = plant;
  const [stock, setStock] = useState(true);

  function handleClick() {
    setStock((stock) => !stock);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    });

    onDeletePlant(id);
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button onClick={handleClick} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default PlantCard;

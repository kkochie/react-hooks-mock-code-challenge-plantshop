import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantArray, onDeletePlant }) {
  const cards = plantArray.map((eachPlant) => {
    return (
      <PlantCard
        key={`Plant-${eachPlant.id}`}
        plant={eachPlant}
        onDeletePlant={onDeletePlant}
      />
    );
  });

  return <ul className="cards">{cards}</ul>;
}

export default PlantList;

import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantArray }) {
  const cards = plantArray.map((eachPlant) => {
    return <PlantCard key={`Plant-${eachPlant.id}`} plant={eachPlant} />;
  });

  return <ul className="cards">{cards}</ul>;
}

export default PlantList;

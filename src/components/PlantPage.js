import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [getPlants, setGetPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setGetPlants(data));
  }, []);

  function addNewPlant(newPlant) {
    setGetPlants([...getPlants, newPlant]);

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant),
    });
  }

  const plantSearchArray = getPlants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  function onDeletePlant(id) {
    const updatedPlantArray = getPlants.filter((plant) => plant.id !== id);
    setGetPlants(updatedPlantArray);
  }

  return (
    <main>
      <NewPlantForm addNewPlantForm={addNewPlant} />
      <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
      <PlantList plantArray={plantSearchArray} onDeletePlant={onDeletePlant} />
    </main>
  );
}

export default PlantPage;

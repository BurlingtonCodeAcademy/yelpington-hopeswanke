// global imports
import React, { useEffect } from "react";
import { useState } from "react";
// imports fetch function 
import getRest from "./api";


function FarmHouse() {
  // variable for json file 
  const [data, setData] = useState(null);
  // pulls json file and sets it to data 
  useEffect(() => {
    getRest("./api/farmhouse.json").then(setData);
  }, [getRest, setData]);
  // error catch
  if (!data) {
    return null;
  }
  return (
    <div id="farmhouse">
      {/* prints restaurants name */}
      <h1>Name: {data.name}</h1>
      {/* prints restaurants address */}
      <h2>Address: {data.address}</h2>
      {/* prints restaurants phone number */}
      <h2>Phone: {data.phoneNum}</h2>
      {/* prints restaurants hours */}
      <h2>Hours: {data.hours}</h2>
      {/* prints restaurants notes */}
      <h3>Notes: {data.notes}</h3>
    </div>
  );
}

export default FarmHouse;



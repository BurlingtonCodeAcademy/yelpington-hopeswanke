// imports use fetch function
import getRest from "./api";
// global imports
import React, { useEffect } from "react";
import { useState } from "react";


function Citizen() {
  // variable for json file
  const [data, setData] = useState(null);
  // pulls json file and sets it to data 
  useEffect(() => {
    getRest("./api/citizen.json").then(setData);
  }, [getRest, setData]);
  // catch for errors
  if (!data) {
    return null;
  }
  return (
    <div id="citizen">
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

export default Citizen;

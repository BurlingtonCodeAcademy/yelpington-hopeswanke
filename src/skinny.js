// imports fetch function 
import getRest from "./api";
// global imports
import React, { useEffect } from "react";
import { useState } from "react";

function Skinny() {
  // creates variable for json
  const [data, setData] = useState(null);
  // pulls json file and puts it to setData
  useEffect(() => {
    getRest("./api/skinny.json").then(setData);
  }, [getRest, setData]);
  // error catch
  if (!data) {
    return null;
  }
  return (
    <div id="skinny">
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

export default Skinny
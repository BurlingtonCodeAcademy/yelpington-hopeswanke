// global imports
import React, { useEffect } from "react";
import { useState } from "react";

// css import
import "./App.css";
// diff page imports
import FarmHouse from "./farmhouse.js";
import Gaku from "./gaku.js";
import Leunigs from "./leunigs.js";
import Skinny from "./skinny.js";
import Citizen from "./citizen.js";
import Honey from "./honey.js";
import Main from "./main.js";

function App() {
  // body of the page parent hook
  const [description, setDescription] = useState(<Main />);
  // Changes page to description of restaurant

  // back to main page
  function handleMainClick() {
    setDescription(<Main />);
  }
  // to the farmhouse description
  function handleFarmClick() {
    setDescription(<FarmHouse />);
  }
  // to the gaku description
  function handleGakuClick() {
    setDescription(<Gaku />);
  }
  // to the leunigs description
  function handleLeunigsClick() {
    setDescription(<Leunigs />);
  }
  // to the skinny p description
  function handleSkinnyClick() {
    setDescription(<Skinny />);
  }
  // to the citizen cider description
  function handleCitizenClick() {
    setDescription(<Citizen />);
  }
  // to the honey road description
  function handleHoneyClick() {
    setDescription(<Honey />);
  }
  return (
    <div>
      {/* Title of Page*/}
      <h1 id="title" onClick={handleMainClick}>
        Burlington hot Spots and where to <i>spot</i> them
      </h1>
      {/* List of Restaurants */}
      <div id="rest-list">
        <h3 class="restaurant" onClick={handleCitizenClick}>
          Citizen Cider
        </h3>
        <h3 class="restaurant" onClick={handleFarmClick}>
          Farmhouse
        </h3>
        <h3 class="restaurant" onClick={handleGakuClick}>
          Gaku Ramen
        </h3>
        <h3 class="restaurant" onClick={handleHoneyClick}>
          Honey Road
        </h3>
        <h3 class="restaurant" onClick={handleLeunigsClick}>
          Leunig's Bistro
        </h3>
        <h3 class="restaurant" onClick={handleSkinnyClick}>
          Skinny Pancake
        </h3>
      </div>
      {/* hook for main body to be changed on click functions */}
      <div>{description}</div>
    </div>
  );
}

export default App;

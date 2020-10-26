import React from "react";
import { render } from "react-dom";
import L from "leaflet";

// layout for map
class Main extends React.Component {
  componentDidMount() {
    this.map();
  }

  map() {
    // sets map view to burlington
    var map = L.map("map").setView([44.4759, -73.2121], 13);
    // sets skinny pancake's long and lat
    const skinny = [44.477502, -73.21968];
    // sets farmhouse long and lat
    const farmhouse = [44.476003, -73.216229]
    // sets honey road long and lat
    const honey = [44.476067, -73.212373]
    // sets gaku ramen long and lat
    const gaku = [44.476378, -73.212403]
    // sets leunigs long and lat
    const leunigs = [44.477180, -73.212702]
    // sets citizen ciders long and lat
    const citizen = [44.470692, -73.214502]

    //  creates the map
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    // adds skinny pancake marker and pop up when clicked 
    L.marker(skinny).addTo(map).bindPopup("This is Skinny Pancake")
    // addd farmhouse marker and pop up when clicked
    L.marker(farmhouse).addTo(map).bindPopup("This is the Farmhouse")
    // add honey marker and pop up when clicked
    L.marker(honey).addTo(map).bindPopup("This is Honey Road")
    // add gaku marker and pop up when clicked
    L.marker(gaku).addTo(map).bindPopup("This is Gaku Ramen")
    // add leunigs marker and pop up when clicked
    L.marker(leunigs).addTo(map).bindPopup("This is Leunig's Bistro")
    // add citizen cider marker and pop up when clicked
    L.marker(citizen).addTo(map).bindPopup("This is Citizen Cider")
    
  }
  render() {
    // div for map to lay in
    return <div id="map"></div>;
  }
}
export default Main;

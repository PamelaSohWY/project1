
//gobal variable
let xlayer = L.layerGroup()

 let divElement = document.createElement('div');

//marker 
async function getCoordinates(map){  //no need map for this bec not using map 
  let response = await axios.get('./data/cashtrash.geojson');
 
  // clustering code

  //loop through co-ordinates
  for(let coordinates of response.data.features ) {
   // create marker using each corodinates
  
   var trashIcon = L.icon({
    iconUrl: './images/cashicon.png',

    //coordinates already defined at line 18
   
    iconSize:     [20, 20], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [coordinates.geometry.coordinates[1], coordinates.geometry.coordinates[0]], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
   popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
   })
  
   let marker = L.marker([coordinates.geometry.coordinates[1], coordinates.geometry.coordinates[0]],{icon: trashIcon}
    ); //,{icon:trashIcon} Do i put it here? //add semicolon to aend of every line
    // add marker to layer 
    marker.addTo(xlayer);
    //bind popup to marker
    marker.bindPopup('hello');  
 }
  // add layer to map
  xlayer.addTo(map);

  

  };

  //toggle button
  document
  .getElementById("btn-add-trashstation")
  .addEventListener("click", function(){
    if (map.hasLayer(xlayer)){
      map.removeLayer(xlayer);
     } else{
     map.addLayer(xlayer)
  }})

// For Set Up of Map
//To put map on to html page with Tiong Bahru Co-ordinate

let singapore = [1.29, 103.85];
let map = L.map('singapore-map');
map.setView(singapore, 13);

//For application of token at mapbox.com 
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken:  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw" 
}).addTo(map);

getCoordinates(map);

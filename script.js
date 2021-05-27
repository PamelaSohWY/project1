
//gobal variable
let xlayer = L.layerGroup()

 let divElement = document.createElement('div');

//marker 
async function getCoordinates(map){  //no need map for this bec not using map 
  let response = await axios.get('./data/cashtrash.geojson');
  //x.features[0].geometry.coordinates[1]
  // console.log(response);
  // create an empty group


  //loop through co-ordinates
  for(let coordinates of response.data.features ) {
   // create marker using each corodiates
    let marker = L.marker([coordinates.geometry.coordinates[1], coordinates.geometry.coordinates[0]])
    // add marker to layer 
    marker.addTo(xlayer);
    //bind popup to marker
    marker.bindPopup(`hello`);

    //needs to be put into the function
     divElement.innerHTML = coordinates.properties.Description; //features was replaced with coordinates
    let postal = divElement.querySelectorAll('td')[7].innerHTML
    console.log(postal[0] + postal[1]);

    if (postal === "11" && postal === "12" && postal === "13") {
      console.log ("The West Zone Stations in District 5 are")
      console.log(postal)//how to check if this is the filtered postal
    } else if 
      (postal === "60" && postal === "61" && postal === "62" && postal === "63" && postal=== "64" ) {
      console.log("The West Zone Stations in District 22 are" )
      console.log(postal)
    } else if 
      (postal === "65" && postal === "66" && postal === "67" && postal === "68" ){
      console.log("The West Zone Stations in District 23 are")
    } else {
      console.log ("Not in the West")
    }
  
  }
  // add layer to map
  xlayer.addTo(map);

  };

//For buttons to divide by postal code 

//global variable
 
  //get west co-ordinates 
 
 
    //let divElement = document.createElement('div');
    //divElement.innerHTML = feature.properties.Description;
    //let postal = divElement.querySelectorAll('td')[7].innerHTML
    //console.log(divElement.querySelectorAll('td')[7].innerHTML)
  
    // for (let p of postal )
    // if 


  //

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



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
    console.log(postal[0] + postal[1]); //this is already a loop funtion ( for ())
    
    postal1 = postal[0] + postal[1]; //need to reassign variable 
    
    //Code for filtering the postal codes
    //https://www.iproperty.com.sg/news/know-which-district-you-are-in-based-on-postal-code/
    //postal codes are strings, so the conditions should be in string as well
    //For West Zone 
    if (postal1 === "11" || postal1 === "12" || postal1 === "13") {
      console.log ("The West Zone Stations in District 5 are")
      console.log(postal)//how to check if this is the filtered postal
    } else if 
      (postal1 === "60" || postal1 === "61" || postal1 === "62" || postal1 === "63" || postal=== "64" ) {
      console.log("The West Zone Stations in District 22 are" )
      console.log(postal)
    } else if 
      (postal1 === "65" || postal1 === "66" || postal1 === "67" || postal1 === "68" ){
      console.log("The West Zone Stations in District 23 are")
      console.log(postal)
    }  
    //For Central 
    else if 
      (postal1 === "77" || postal1 === "78"  ){
      console.log("The Central Zone Stations in District 26 are")
      console.log(postal)
    }  
    else if 
      (postal1 === "58" || postal1 === "59"  ){
      console.log("The Central Zone Stations in District 21 are")
      console.log(postal)
    }  
    else if 
    (postal1 === "28" || postal1 === "29" || postal1 === "30"  ){
    console.log("The Central Zone Stations in District 11 are")
    console.log(postal)
    }  
    else if 
    (postal1 === "31" || postal1 === "32" || postal1 === "33"  ){
    console.log("The Central Zone Stations in District 12 are")
    console.log(postal)
    }  
    else if 
    (postal1 === "34" || postal1 === "35" || postal1 === "36" || postal1 ==="37"){
    console.log("The Central Zone Stations in District 13 are")
    console.log(postal)
    }  
    else if 
   (postal1 === "20" || postal1 === "21" ){
    console.log("The Central Zone Stations in District 8 are")
    console.log(postal)
   }  
   else if 
   (postal1 === "24" || postal1 === "25" || postal1 === "26" || postal1 ==="27"){
   console.log("The Central Zone Stations in District 10 are")
   console.log(postal)
   }  
  else if 
  (postal1 === "38" || postal1 === "39" || postal1 === "40" || postal1 ==="41"){
    console.log("The Central Zone Stations in District 14 are")
    console.log(postal)
  }  
  else if 
  (postal1 === "14" || postal1 === "15" || postal1 === "16" ){
    console.log("The Central Zone Stations in District 3 are")
    console.log(postal)
  } 
  else if 
  (postal1 === "22" || postal1 === "23"){
    console.log("The Central Zone Stations in District 9 are")
    console.log(postal)
  } 
  else if 
  (postal1 === "18" || postal1 === "19"){
  console.log("The Central Zone Stations in District 7 are")
  console.log(postal)
  } 
  else if 
  (postal1 === "9" || postal1 === "10"){
  console.log("The Central Zone Stations in District 4 are")
  console.log(postal)
  } 
  else if 
  (postal1 === "7" || postal1 === "8"){
  console.log("The Central Zone Stations in District 2 are")
  console.log(postal)
  } 
  else if 
  (postal1 === "17"){
  console.log("The Central Zone Stations in District 6 are")
  console.log(postal)
  } 
    //For East 
else if 
  (postal1 === "42" || postal1 === "43" || postal1 === "44" || postal1 ==="45"){
    console.log("The Central Zone Stations in District 15 are")
}        
else if 
  (postal1 === "46" || postal1 === "47" || postal1 === "48"){
    console.log("The Central Zone Stations in District 16 are")
    console.log(postal)
} 
else if 
    (postal1 === "51" || postal1 === "52"){
      console.log("The Central Zone Stations in District 18 are")
      console.log(postal)
} 
else 
  {
      console.log("The Central Zone Stations in District 17 are")
      console.log(postal)
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


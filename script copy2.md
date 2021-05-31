  
let singapore = [1.29, 103.85];
let map = L.map('singapore-map');
map.setView(singapore, 13);

// setup tilelayer
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZXh0cmFrdW4iLCJhIjoiY2swdnZtMWVvMTAxaDNtcDVmOHp2c2lxbSJ9.4WxdONppGpMXeHO6rq5xvg'
}).addTo(map);

let north= [];
let south=[]

let trashLayer;
// let clusterLayer = L.markerClusterGroup()

window.addEventListener('DOMContentLoaded', async ()=>{
    let response = await axios.get('./data/cashtrash.geojson');
    trashLayer = L.geoJson(response.data, {
        onEachFeature: function(feature, layer) {
            console.log(feature);
           let divElement = document.createElement('div');
           divElement.innerHTML = feature.properties.Description;
           console.log(divElement.querySelectorAll('td')[7].innerHTML)
  //          let locality = divElement.querySelector('td').innerHTML;
  //         let cases = divElement.querySelectorAll('td')[1].innerHTML;
            
   //        layer.bindPopup(`<div>
   //         <h1>${locality}</h1>
   //         <h2>Cases: ${cases}</h2>
   //         <div>`);

   layer.bindPopup(feature.properties.Description)
//basic for map
      }              //show map 

      // update the style here
    });              //show map   

//create event listener for the add trash station button
document.getElementById("btn-add-trashstation").addEventListener("click", addTrashStation)

function addTrashStation(){
  if (map.hasLayer(trashLayer)){
    map.removeLayer(trashLayer);
   } else{
   map.addLayer(trashLayer)
   
   }
};


//     let response2 = await axios.get('southwest.geojson');
 //    let layer2 = L.geoJson(response2.data, {
 //       onEachFeature: function(feature, layer) {
 //          layer.bindPopup(feature.properties.Description)
 //      }
 //   });
 //   layer2.addTo(map);
 //   layer2.setStyle({
 //       'color':'blue',
 //       'fillColor':'orange'
 //   })
    
}) //show map 





//Code for Clustering 
//async function getTrashCoordinates(){
//  let response = await axios.get('./data/cashtrash.geojson');
  //x.features[0].geometry.coordinates   // what is the x?
//  return response.data.features[0].geometry.coordinates[0][1];                     
//} 

//async function addTrashCoordinates(map)
//{
//  let trashstation = await getTrashCoordinates()
   //create clusters to hold markers 
//   let cluster = L.markerClusterGroup();
//   for(let s of stations){
     //swap so it becomes [lat,lng]
//     let coordinate = [s[1], s[0]];
//     let stationMarker = L.marker(coordinate);
//     stationMarker.addTo(cluster);
//   }
//   cluster.addTo(map);
//   }

//addTrashCoordinates(map);


Code for filtering postal code

    //needs to be put into the function
     divElement.innerHTML = coordinates.properties.Description; //features was replaced with coordinates
    let postal = divElement.querySelectorAll('td')[7].innerHTML
    console.log(postal[0] + postal[1]); //this is already a loop funtion ( for ())
    
    postal1 = postal[0] + postal[1]; //need to reassign variable 
    
    //Code for filtering the postal codes
    //https://www.iproperty.com.sg/news/know-which-district-you-are-in-based-on-postal-code/
    //postal codes are strings, so the conditions should be in string as well
    //For West Zone 
    //if (postal1 === "11" || postal1 === "12" || postal1 === "13") {
    //  console.log ("The West Zone Stations in District 5 are")
    //  console.log(postal)//how to check if this is the filtered postal
    //} else if 
    //  (postal1 === "60" || postal1 === "61" || postal1 === "62" || postal1 === "63" || postal=== "64" ) {
    //  console.log("The West Zone Stations in District 22 are" )
    //  console.log(postal)
   // } else if 
    //  (postal1 === "65" || postal1 === "66" || postal1 === "67" || postal1 === "68" ){
   //   console.log("The West Zone Stations in District 23 are")
    //  console.log(postal)
   // }  
    //For Central 
   // else if 
   //   (postal1 === "77" || postal1 === "78"  ){
   //   console.log("The Central Zone Stations in District 26 are")
   //   console.log(postal)
    //}  
   // else if 
    //  (postal1 === "58" || postal1 === "59"  ){
    //  console.log("The Central Zone Stations in District 21 are")
   //  console.log(postal)
   // }  
   // else if 
    //(postal1 === "28" || postal1 === "29" || postal1 === "30"  ){
   // console.log("The Central Zone Stations in District 11 are")
   // console.log(postal)
   // }  
   // else if 
    //(postal1 === "31" || postal1 === "32" || postal1 === "33"  ){
    //console.log("The Central Zone Stations in District 12 are")
    //console.log(postal)
    //}  
   // else if 
   // (postal1 === "34" || postal1 === "35" || postal1 === "36" || postal1 ==="37"){
   // console.log("The Central Zone Stations in District 13 are")
   // console.log(postal)
   // }  
  //  else if 
   //(postal1 === "20" || postal1 === "21" ){
   // console.log("The Central Zone Stations in District 8 are")
   // console.log(postal)
   //}  
  // else if 
   //(postal1 === "24" || postal1 === "25" || postal1 === "26" || postal1 ==="27"){
   //console.log("The Central Zone Stations in District 10 are")
   //console.log(postal)
  // }  
  //else if 
  //(postal1 === "38" || postal1 === "39" || postal1 === "40" || postal1 ==="41"){
   // console.log("The Central Zone Stations in District 14 are")
  //  console.log(postal)
 // }  
 // else if 
  //(postal1 === "14" || postal1 === "15" || postal1 === "16" ){
   // console.log("The Central Zone Stations in District 3 are")
  //  console.log(postal)
  //} 
 // else if 
 // (postal1 === "22" || postal1 === "23"){
 //   console.log("The Central Zone Stations in District 9 are")
  //  console.log(postal)
 // } 
 // else if 
 // (postal1 === "18" || postal1 === "19"){
 // console.log("The Central Zone Stations in District 7 are")
 // console.log(postal)
 // } 
 // else if 
 // (postal1 === "9" || postal1 === "10"){
 // console.log("The Central Zone Stations in District 4 are")
 // console.log(postal)
 // } 
 // else if 
 // (postal1 === "7" || postal1 === "8"){
 // console.log("The Central Zone Stations in District 2 are")
  //console.log(postal)
 // } 
 // else if 
 // (postal1 === "17"){
 // console.log("The Central Zone Stations in District 6 are")
 // console.log(postal)
 // } 
    //For East 
//else if 
 // (postal1 === "42" || postal1 === "43" || postal1 === "44" || postal1 ==="45"){
  //  console.log("The Central Zone Stations in District 15 are")
//}        
//else if 
//  (postal1 === "46" || postal1 === "47" || postal1 === "48"){
//    console.log("The Central Zone Stations in District 16 are")
//    console.log(postal)
//} 
//else if 
 //   (postal1 === "51" || postal1 === "52"){
 //     console.log("The Central Zone Stations in District 18 are")
 //     console.log(postal)
//} 
//else 
//  {
 //     console.log("The Central Zone Stations in District 17 are")
//      console.log(postal)
//} 

// document.querySelector ('#')
//         // user click get what user click on 
//         if (stations.name ===  )
//         //re-rendering your whole marker
//        // - remove marker 
//         //- add only 1 marker 
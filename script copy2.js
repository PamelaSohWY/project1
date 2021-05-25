  
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
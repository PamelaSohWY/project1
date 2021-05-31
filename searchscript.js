// make sure no conflict between the 2 scripts 
// make sure its all triggered by function

  async function getStation(map){
      let data = await axios.get("./data/mrt.json");
      return data.data;
  }



  //28 May : currently generating with each click, but should only generate once (so add into DOM content loaded )??
  document.querySelector('#dropdownMenuButton1').addEventListener('click', async function(){
        let stations = await getStation();
        let name = stations.name
        console.log(stations);
        console.log(1);
        for(let i of stations){
            document.querySelector('#xyzstation').innerHTML += `<li>${i.name}</li>`
        }
      
      })//end of docQS

      //this code is to generate action click
// document.querySelector ('#location').addEventListener('click', async function(){

// })//end of docQS 
//         // user click get what user click on 
//         if (stations.name ===  )
//         //re-rendering your whole marker
//        // - remove marker 
//         //- add only 1 marker 
//Create new layer for Mrt 
//gobal variable
let mrtlayer = L.layerGroup()

let divElement1 = document.createElement('div');

//marker 
async function getMrtCoordinates(map){  //no need map for this bec not using map 
 let response1 = await axios.get('./data/mrt.json');
 //x.features[0].geometry.coordinates[1]
 console.log(response1.data);
 // create an empty group


 //loop through co-ordinates
 for(let c of response1.data) { //higher level parent
  // create marker using each corodinates

  var mrtIcon = L.icon({
    iconUrl: './images/MRT.png',

   
   
    iconSize:     [20, 20], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [c.coordinates], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
   popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
   })

   let marker = L.marker(c.coordinates,{icon: mrtIcon} ); //do not add in [] dont put in nested array
   console.log(marker); //To check if the function is called
   // add marker to layer 
   marker.addTo(mrtlayer);
   //bind popup to marker
   marker.bindPopup('station');
   
 }
    // add layer to map
   mrtlayer.addTo(map);

  }; // end of async function

   //toggle button
  document
  .getElementById("btn-add-mrtstation")
  .addEventListener("click", function(){
    if (map.hasLayer(mrtlayer)){
      map.removeLayer(mrtlayer);
     } else{
     map.addLayer(mrtlayer)
  }});

  getStation(map);
  getMrtCoordinates(map);
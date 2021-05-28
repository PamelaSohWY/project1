// async function getStation(desiredStation) {
//     let url = `./data/mrt.json/${desiredStation}`;
//     let response = await axios.get(url);
//     return response.data;
//   }
  
//   document.querySelector('#dropdownMenuButton1').addEventListener('click', async function(){
      
//       let searchTerms = document.querySelector('#dropdownMenuButton1').value; //check if this ID is correct. 
  
//       let station = await getStation(searchTerms);
//       let name = station.name
//       let type = station.type;
  
      
//       let dataElement = document.querySelector('#data');
//       dataElement.innerHTML = `<li>Name: ${name}</li>
//           <li><img src='${type}'</li>`
//           console.log("try")
//   })

  async function getStation(map){
      let data = await axios.get("./data/mrt.json");
      return data.data;
  }

  //28 May remarks : currently generating with each click, but should only generate once (so add into DOM content loaded )
  document.querySelector('#dropdownMenuButton1').addEventListener('click', async function(){
        let stations = await getStation();
        let name = stations.name
        console.log(stations);
        console.log(1);
        for(let i of stations){
            document.querySelector('#xyzstation').innerHTML += `<li><a class="dropdown-item" href="#">${i.name}</a></li>`

        }
        
  })

  //document.querySelectorAll('option:checked')[0].value // found on google

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
   let marker = L.marker(c.coordinates) //do not add in [] dont put in nested array
   console.log(marker) //To check if the function is called
   // add marker to layer 
   marker.addTo(mrtlayer);
   //bind popup to marker
   marker.bindPopup(`station`);
   
 }
    // add layer to map
   mrtlayer.addTo(map);

  };

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
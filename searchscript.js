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
       
        for(let i of stations){
            document.querySelector('#xyzstation').innerHTML += `<li class="location">${i.name}</li>`
        }



        for(let i of document.querySelectorAll(".location")){
          i.addEventListener('click', async function(e){
            //  let name = stations.name
            console.log(e.target.innerHTML);

                for(let i of stations){
                  if (e.target.innerHTML === i.name){
                    console.log("created marker for" + i.name) //this is 
                    let starlayer=L.layerGroup()
                    let divElement3 = document.createElement('div');
                    var redstarIcon = L.icon({
                      iconUrl: './images/redstar.png',
                  
                      //coordinates already defined at line 18
                    
                      iconSize:     [20, 20], // size of the icon
                      shadowSize:   [50, 64], // size of the shadow
                      iconAnchor:   i.coordinates, // point of the icon which will correspond to marker's location
                      shadowAnchor: [4, 62],  // the same for the shadow
                    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
                    })
    
                    let marker = L.marker([i.coordinates],{icon: redstarIcon}); //,{icon:trashIcon} Do i put it here? //add semicolon to aend of every line
                      // add marker to layer 
                      marker.addTo(starlayer);
                      //bind popup to marker
                      marker.bindPopup('Selected location');  
                  }
                }
               
             
 
            })
          }// end of i.eventListener
  }) //line12
      
//end of docQS line12
      //this code is to generate action click
//end of docQS 
//gobal variable
let mrtlayer = L.layerGroup()

let divElement1 = document.createElement('div');

//marker 
async function getMrtCoordinates(map){  //no need map for this bec not using map 
 let response1 = await axios.get('./data/mrt.json');
 //x.features[0].geometry.coordinates[1]
 //console.log(response1.data);
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
   //console.log(marker); //To check if the function is called
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
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

  async function getStation(){
      let data = await axios.get("./data/mrt.json");
      return data.data;
  }

  document.querySelector('#dropdownMenuButton1').addEventListener('click', async function(){
        let stations = await getStation();
        console.log(stations);
        console.log(1);
        for(let i of stations){
            document.querySelector('#dropdownMenuButton1').innerHTML += "<li>123</li>"

        }
        
  })

  //document.querySelectorAll('option:checked')[0].value
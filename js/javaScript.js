$(function(){
    // Since the h1 never changes it should be done in html. JS is for things that change!
    $("header").append($("<h1>").text("STAR WARS"));
    
    // Three! Wow!
    const PLANET_API = "https://swapi.py4e.com/api/planets";
    const STARSHIP_API = "https://swapi.py4e.com/api/starships";
    const VEHICLE_API = "https://swapi.py4e.com/api/vehicles";

    getSomePlanet();

    getSomeStarship();

    getSomeVehicle();

    function getSomePlanet() {
        fetch(PLANET_API)
        .then((response) => {
            // Have a space before and after the (  ) in ifs. eg if (!response.ok) {
            if(!response.ok) {
                throw new Error(response.status)
            // } else {
            }else{
                return response.json()
            }
        })
        .then((data) => {
            console.log(data.results);  // to be able to see all the data that I need I write it in the console

            let planets = data.results;
            
            $("#planet").append($("<option/>").attr("value", "1").text("Choose a planet"));
            planets.forEach(item => {
              console.log(item.name); // I can get all the planets in the console

              $("#planet").append($("<option/>").attr("value", item.id).text(item.name));
            })

            $("#planet").on("change", function() {
                          
                planets.forEach(item => {
                    if(item.name === this.value ) {  // in each planet I get its info
                        $(".planets-diameter").text("Diameter: " + item.diameter);
                        $(".planets-terrain").text("Terrain: " + item.terrain);
                        $(".planets-climate").text("Climate: " + item.climate);
                        $(".planets-population").text("Population: " + item.population);
                    }
                    else if(this.value === "1"){
                        $(".planets-diameter").text("");
                        $(".planets-terrain").text( "");
                        $(".planets-climate").text( "");
                        $(".planets-population").text("");  
// It's more readable if you remove these empty lines 
                    }
        // Detsamma!                         
                });
               
            })
                       
         })

        .catch(error => { // Nice!
            $(".planets").append($("<div class='wrapper-planets'>").text("Something went wrong " + error));
        })
    }

    function getSomeStarship() {
        fetch(STARSHIP_API)
        .then((response) => {
            if(!response.ok) {
                throw new Error(response.status)
            }else{
                return response.json()
            }
        })
        .then((data) => {
            console.log(data.results);  // to be able to see all the data that I need I write it in the console

            let starship = data.results;
            $("#starship").append($("<option/>").attr("value", "1").text("Choose a ship"));
            starship.forEach(item => {
              console.log(item.name); // I can get all the starships in the console

              $("#starship").append($("<option/>").attr("value", item.name).text(item.name));
            })

            $("#starship").on("change", function() {
             
                starship.forEach(item => {

                    if(item.name === this.value) {  // in each starship I get its info
                                              
                        $(".starship-model").text("Model: " + item.model);
                        $(".starship-length").text("Type: " + item.lenght);
                        $(".starship-speed").text("Length: " + item.speed);
                        $(".starship-passengers").text("Passengers: " + item.passengers);
                    }
                    else if(this.value === "1"){
                        $(".starship-model").text("");
                        $(".starship-length").text( "");
                        $(".starship-speed").text( "");
                        $(".starship-passengers").text("");  

                    }
                                  
                });
               
            })
                       
         })

        .catch(error => {
            $(".starships").append($("<div class='wrapper-starships'>").text("Something went wrong " + error));
        })
    }


// What happened here!
    
    
    
    function getSomeVehicle() {
        fetch(VEHICLE_API)
        .then((response) => {
            if(!response.ok) {
                throw new Error(response.status)
            }else{
                return response.json()
            }
        })
        .then((data) => {
            console.log(data.results);  // to be able to see all the data that I need I write it in the console

            let vehicle = data.results;
            $("#vehicle").append($("<option/>").attr("value", "1").text("Choose a vehicle")); // default option, has to be empty
            vehicle.forEach(item => {
              console.log(item.name); // I can get all the vehicles in the console

              $("#vehicle").append($("<option/>").attr("value", item.name).text(item.name)); // creates a drop down list
            })

            $("#vehicle").on("change", function() {
             
                vehicle.forEach(item => {

                    if(item.name === this.value) {     //the choosen value from the option is going to show the info
                                                                                 // in each vehicle I get its info
                                              
                        $(".vehicle-model").text("Model: " + item.model);
                        $(".vehicle-type").text("Type: " + item.vehicle_class);
                        $(".vehicle-length").text("Length: " + item.length);
                        $(".vehicle-passenger").text("Passengers: " + item.passengers);
                    }
                    else if(this.value === "1"){ // identify the default option is not going to show any value
                        $(".vehicle-model").text("");
                        $(".vehicle-type").text( "");
                        $(".vehicle-length").text( "");
                        $(".vehicle-passenger").text("");  

                    }    
                });
               
            })
                       
         })

        .catch(error => {
            $(".vehicles").append($("<div class='wrapper-vehicles'>").text("Something went wrong " + error));
        })
    }

})

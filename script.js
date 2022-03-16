var userInput = $("#userInput");
var homeBtn = $("#searchBtn")
var apiKey = "2849398c70c43740b834e55dce0bad4a";
var pastCities = []

console.log(userInput)

function cityWeather () {
    var userRequest = localStorage.getItem("userInput")
    var weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput.val() + "&appid=" + apiKey;

    fetch(weatherAPI)
    .then(function (response) {
        if (response.status === 404) {
          console.log(response);
        } else {
          return response.json();
        }
      })
      .then(function (data) {
        //console.log(data);
        var lat = data.coord.lat
        var lon = data.coord.lon
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&units=imperial&appid=" + apiKey)
        .then(function (response) {
            if (response.status === 404) {
              console.log(response);
            } else {
              return response.json();
            }
          })
          .then(function (data) {
            console.log(data);

    
    
    
    
    
            
          });




        
      });
}

function setUserInput() {
    localStorage.setItem("userInput", userInput.val().replace(/\s+/g, "+"));
}

homeBtn.on("click", cityWeather)
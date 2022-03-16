var userInput = $("#userInput");
var apiKey = "2849398c70c43740b834e55dce0bad4a";
var pastCities = []

console.log(userInput)

function cityWeather () {
    var userRequest = localStorage.getItem("userInput")
    var weatherAPI = "api.openweathermap.org/data/2.5/weather?q" + userInput + "&appid=" + apiKey;

    fetch(weatherAPI)
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
}

function setUserInput() {
    localStorage.setItem("userInput", userInput.val().replace(/\s+/g, "+"));
  }
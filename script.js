var userInput = $("#userInput");
var homeBtn = $("#searchBtn")
var apiKey = "2849398c70c43740b834e55dce0bad4a";
var cityName = $("#cityName")
var tempText = $("#temp")
var humidText = $("#humid")
var windText = $("#wind")
var uviText = $("#uvi")
var pastCities = []




function cityWeather () {
  var weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput.val() + "&appid=" + apiKey;

    fetch(weatherAPI)
    .then(function (response) {
        if (response.status === 404) {
          //console.log(response);
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
            var tempData = data.current.temp;
            var humidData = data.current.humidity;
            var windData = data.current.wind_speed;
            var uviData = data.current.uvi;
            var date = moment().format("MMM Do, YYYY")

            localStorage.setItem("Temp", tempData)
            localStorage.setItem("Humidity", humidData)
            localStorage.setItem("Wind", windData)
            localStorage.setItem("UVI", uviData)
            localStorage.setItem("city", userInput.val())

            var temp = localStorage.getItem("Temp")
            var humid = localStorage.getItem("Humidity")
            var wind = localStorage.getItem("Wind")
            var uvi = localStorage.getItem("UVI")
            var city = localStorage.getItem("city")
            var bigCity = city.toUpperCase()
            
            cityName.text(bigCity + "  " + date)
            tempText.text("Temp: " + temp + " F")
            humidText.text("Humidity: " + humid)
            windText.text("Wind Speed: " + wind + " mph")
            uviText.text("UVI: " + uvi)
          })
      });
}

function futureWeather () {
  var weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput.val() + "&appid=" + apiKey;
  
  fetch(weatherAPI)
  .then(function (response) {
      if (response.status === 404) {
        //console.log(response);
      } else {
        return response.json();
      }
    })
    .then(function (data) {
      
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
        .then (function (data) {
          console.log(data);
          var future1TempData = data.daily[0].temp.day
          var future2TempData = data.daily[1].temp.day
          var future3TempData = data.daily[2].temp.day
          var future4TempData = data.daily[3].temp.day
          var future5TempData = data.daily[4].temp.day

          var future1HumidData = data.daily[0].humidity
          var future2HumidData = data.daily[1].humidity
          var future3HumidData = data.daily[2].humidity
          var future4HumidData = data.daily[3].humidity
          var future5HumidData = data.daily[4].humidity

          var future1WindData = data.daily[0].wind_speed
          var future2WindData = data.daily[1].wind_speed
          var future3WindData = data.daily[2].wind_speed
          var future4WindData = data.daily[3].wind_speed
          var future5WindData = data.daily[4].wind_speed

          var futureDate1 = moment().add(1,'day').format("MMM Do, YYYY")
          var futureDate2 = moment().add(2,'day').format("MMM Do, YYYY")
          var futureDate3 = moment().add(3,'day').format("MMM Do, YYYY")
          var futureDate4 = moment().add(4,'day').format("MMM Do, YYYY")
          var futureDate5 = moment().add(5,'day').format("MMM Do, YYYY")

          localStorage.setItem("Future1Temp", future1TempData)
          localStorage.setItem("Future2Temp", future2TempData)
          localStorage.setItem("Future3Temp", future3TempData)
          localStorage.setItem("Future4Temp", future4TempData)
          localStorage.setItem("Future5Temp", future5TempData)

          localStorage.setItem("Future1Humidity", future1HumidData)
          localStorage.setItem("Future2Humidity", future2HumidData)
          localStorage.setItem("Future3Humidity", future3HumidData)
          localStorage.setItem("Future4Humidity", future4HumidData)
          localStorage.setItem("Future5Humidity", future5HumidData)

          localStorage.setItem("Future1Wind", future1WindData)
          localStorage.setItem("Future2Wind", future2WindData)
          localStorage.setItem("Future3Wind", future3WindData)
          localStorage.setItem("Future4Wind", future4WindData)
          localStorage.setItem("Future5Wind", future5WindData)

          var Future1Temp = localStorage.getItem("Future1Temp")
          var Future2Temp = localStorage.getItem("Future2Temp")
          var Future3Temp = localStorage.getItem("Future3Temp")
          var Future4Temp = localStorage.getItem("Future4Temp")
          var Future5Temp = localStorage.getItem("Future5Temp")

          var Future1Humidity = localStorage.getItem("Future1Humidity")
          var Future2Humidity = localStorage.getItem("Future2Humidity")
          var Future3Humidity = localStorage.getItem("Future3Humidity")
          var Future4Humidity = localStorage.getItem("Future4Humidity")
          var Future5Humidity = localStorage.getItem("Future5Humidity")

          var Future1Wind = localStorage.getItem("Future1Wind")
          var Future2Wind = localStorage.getItem("Future2Wind")
          var Future3Wind = localStorage.getItem("Future3Wind")
          var Future4Wind = localStorage.getItem("Future4Wind")
          var Future5Wind = localStorage.getItem("Future5Wind")
         
        
          var future1IconData = data.daily[0].weather[0].main
          console.log(future1IconData)
          if (future1IconData === "Rain") {
            var future1Icon = "fa-solid fa-cloud-showers-heavy"
          } else if (future1IconData === "Clouds") {
            var future1Icon = "fa-solid fa-cloud"
          } else if (future1IconData === "Clear") {
            var future1Icon = "fa-solid fa-sun"
          } else if (future1IconData === "Thunderstorm") {
            var future1Icon = "fa-solid fa-cloud-bolt"
          } else if (future1IconData === "Drizzle") {
            var future1Icon = "fa-solid fa-cloud-drizzle"
          } else if (future1IconData === "Snow") {
            var future1Icon = "fa-solid fa-snowflake"
          } else {
            var future1Icon = "fa-solid fa-cloud-fog"
          }

          var future2IconData = data.daily[1].weather[0].main
          console.log(future2IconData)
          if (future2IconData === "Rain") {
            var future2Icon = "fa-solid fa-cloud-showers-heavy"
          } else if (future2IconData === "Clouds") {
            var future2Icon = "fa-solid fa-cloud"
          } else if (future2IconData === "Clear") {
            var future2Icon = "fa-solid fa-sun"
          } else if (future2IconData === "Thunderstorm") {
            var future2Icon = "fa-solid fa-cloud-bolt"
          } else if (future2IconData === "Drizzle") {
            var future2Icon = "fa-solid fa-cloud-drizzle"
          } else if (future2IconData === "Snow") {
            var future2Icon = "fa-solid fa-snowflake"
          } else {
            var future2Icon = "fa-solid fa-cloud-fog"
          }

          var future3IconData = data.daily[2].weather[0].main
          console.log(future3IconData)
          if (future3IconData === "Rain") {
            var future3Icon = "fa-solid fa-cloud-showers-heavy"
          } else if (future3IconData === "Clouds") {
            var future3Icon = "fa-solid fa-cloud"
          } else if (future3IconData === "Clear") {
            var future3Icon = "fa-solid fa-sun"
          } else if (future3IconData === "Thunderstorm") {
            var future3Icon = "fa-solid fa-cloud-bolt"
          } else if (future3IconData === "Drizzle") {
            var future3Icon = "fa-solid fa-cloud-drizzle"
          } else if (future3IconData === "Snow") {
            var future3Icon = "fa-solid fa-snowflake"
          } else {
            var future3Icon = "fa-solid fa-cloud-fog"
          }

          var future4IconData = data.daily[3].weather[0].main
          console.log(future4IconData)
          if (future4IconData === "Rain") {
            var future4Icon = "fa-solid fa-cloud-showers-heavy"
          } else if (future4IconData === "Clouds") {
            var future4Icon = "fa-solid fa-cloud"
          } else if (future4IconData === "Clear") {
            var future4Icon = "fa-solid fa-sun"
          } else if (future4IconData === "Thunderstorm") {
            var future4Icon = "fa-solid fa-cloud-bolt"
          } else if (future4IconData === "Drizzle") {
            var future4Icon = "fa-solid fa-cloud-drizzle"
          } else if (future4IconData === "Snow") {
            var future4Icon = "fa-solid fa-snowflake"
          } else {
            var future4Icon = "fa-solid fa-cloud-fog"
          }

          var future5IconData = data.daily[4].weather[0].main
          console.log(future5IconData)
          if (future5IconData === "Rain") {
            var future5Icon = "fa-solid fa-cloud-showers-heavy"
          } else if (future5IconData === "Clouds") {
            var future5Icon = "fa-solid fa-cloud"
          } else if (future5IconData === "Clear") {
            var future5Icon = "fa-solid fa-sun"
          } else if (future5IconData === "Thunderstorm") {
            var future5Icon = "fa-solid fa-cloud-bolt"
          } else if (future5IconData === "Drizzle") {
            var future5Icon = "fa-solid fa-cloud-drizzle"
          } else if (future5IconData === "Snow") {
            var future5Icon = "fa-solid fa-snowflake"
          } else {
            var future5Icon = "fa-solid fa-cloud-fog"
          }

          var cardContainer1 = $("<div>")
            .attr("class", "card")
            .attr("style","border: 10px solid pink")
          var cardBody1 = $("<div>").attr("class", "card-body");
          var cardTitle1 = $("<h5>")
            .attr("class", "card-title text-dark")
            .text(futureDate1);
          var cardIcon1 = $("<i>")
            .attr("class", future1Icon)
            .attr("style","font-size:36px;")
          var cardText1 = $("<p>")
            .attr("class", "card-text text-black-50")
            .text("Temp: " + Future1Temp + " F")
          var cardsText1 = $("<p>")
            .attr("class", "card-text text-black-50")
            .text("Humdity: " + Future1Humidity)
          var cardssText1 = $("<p>")
            .attr("class", "card-text text-black-50")
            .text("Wind Speed: " + Future1Wind + " mph")
          $(cardBody1).append(cardTitle1).append(cardIcon1, cardText1, cardsText1, cardssText1);
          $(cardContainer1).append(cardBody1);
          $("#forecast1").append(cardContainer1);

          var cardContainer2 = $("<div>")
            .attr("class", "card")
            .attr("style","border: 10px solid pink")
          var cardBody2 = $("<div>").attr("class", "card-body");
          var cardTitle2 = $("<h5>")
            .attr("class", "card-title text-dark")
            .text(futureDate2);
          var cardIcon2 = $("<i>")
            .attr("class", future2Icon)
            .attr("style","font-size:36px;")
          var cardText2 = $("<p>")
            .attr("class", "card-text text-black-50")
            .text("Temp: " + Future2Temp + " F")
          var cardsText2 = $("<p>")
            .attr("class", "card-text text-black-50")
            .text("Humdity: " + Future2Humidity)
          var cardssText2 = $("<p>")
            .attr("class", "card-text text-black-50")
            .text("Wind Speed: " + Future2Wind + " mph")
  
          $(cardBody2).append(cardTitle2).append(cardIcon2, cardText2, cardsText2, cardssText2);
          $(cardContainer2).append(cardBody2);
          $("#forecast2").append(cardContainer2);
      
          var cardContainer3 = $("<div>")
            .attr("class", "card")
            .attr("style","border: 10px solid pink")
          var cardBody3 = $("<div>").attr("class", "card-body");
          var cardTitle3 = $("<h5>")
            .attr("class", "card-title text-dark")
            .text(futureDate3);
          var cardIcon3 = $("<i>")
            .attr("class", future3Icon)
            .attr("style","font-size:36px;")
          var cardText3 = $("<p>")
            .attr("class", "card-text text-black-50")
            .text("Temp: " + Future3Temp + " F")
          var cardsText3 = $("<p>")
            .attr("class", "card-text text-black-50")
            .text("Humdity: " + Future3Humidity)
          var cardssText3 = $("<p>")
            .attr("class", "card-text text-black-50")
            .text("Wind Speed: " + Future3Wind + " mph")

          $(cardBody3).append(cardTitle3).append(cardIcon3, cardText3, cardsText3, cardssText3);
          $(cardContainer3).append(cardBody3);
          $("#forecast3").append(cardContainer3);

          var cardContainer4 = $("<div>")
            .attr("class", "card")
            .attr("style","border: 10px solid pink")
          var cardBody4 = $("<div>").attr("class", "card-body");
          var cardTitle4 = $("<h5>")
            .attr("class", "card-title text-dark")
            .text(futureDate4);
          var cardIcon4 = $("<i>")
            .attr("class", future4Icon)
            .attr("style","font-size:36px;")
          var cardText4 = $("<p>")
            .attr("class", "card-text text-black-50")
            .text("Temp: " + Future4Temp + " F")
          var cardsText4 = $("<p>")
            .attr("class", "card-text text-black-50")
            .text("Humdity: " + Future4Humidity)
          var cardssText4 = $("<p>")
            .attr("class", "card-text text-black-50")
            .text("Wind Speed: " + Future4Wind + " mph")

          $(cardBody4).append(cardTitle4).append(cardIcon4, cardText4, cardsText4, cardssText4);
          $(cardContainer4).append(cardBody4);
          $("#forecast4").append(cardContainer4);

          var cardContainer5 = $("<div>")
            .attr("class", "card")
            .attr("style","border: 10px solid pink")
          var cardBody5 = $("<div>").attr("class", "card-body");
          var cardTitle5 = $("<h5>")
            .attr("class", "card-title text-dark")
            .text(futureDate5);
          var cardIcon5 = $("<i>")
            .attr("class", future5Icon)
            .attr("style","font-size:36px;")
          var cardText5 = $("<p>")
            .attr("class", "card-text text-black-50")
            .text("Temp: " + Future5Temp + " F")
          var cardsText5 = $("<p>")
            .attr("class", "card-text text-black-50")
            .text("Humdity: " + Future5Humidity)
          var cardssText5 = $("<p>")
            .attr("class", "card-text text-black-50")
            .text("Wind Speed: " + Future5Wind + " mph")
          $(cardBody5).append(cardTitle5).append(cardIcon5, cardText5, cardsText5, cardssText5);
          $(cardContainer5).append(cardBody5);
          $("#forecast5").append(cardContainer5);
  
        })
  });
}

homeBtn.on("click", function(event) {

  cityWeather();
  futureWeather();
  event.preventDefault();
  event.stopPropagation();
})
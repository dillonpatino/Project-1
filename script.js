function getApi(lat, lon) {
  var requestUrl = 'http://www.mapquestapi.com/search/v2/radius?key=9ODBlqwdopmVqeGPPP1PrrUCI0uUXEOG&maxMatches=4&origin=' + lat + ',' + lon ;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)

    })
}

var searchHistory = []
var prevCitySearched = ""

function cityWeather(city) {
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=33a442ce0b1dad52f9352616c57d9d69&units=imperial";
  var geoLocation = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=33a442ce0b1dad52f9352616c57d9d69"
  fetch(geoLocation)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data);
      getoneCall(data, city);
      getApi(data[0].lat, data[0].lon)
    })
};
function getoneCall(data, city) {
  var oneCall = "https://api.openweathermap.org/data/2.5/onecall?lat=" + data[0].lat + "&lon=" + data[0].lon + "&appid=33a442ce0b1dad52f9352616c57d9d69&units=imperial"
  fetch(oneCall)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data);
      displayWeather(data, city);
      displayFiveDay(data);
    })
}

function trailSearch(event) {
  event.preventDefault();

  var trailName = $("#trailname").val().trim()

  if (trailName) {
    cityWeather(trailName);

    $("#trailname").val("");

  } else {
    alert("Enter a trail name");
  }
};


function displayWeather(weatherData, city) {
  $("#main-trail-name").text

var trailWeather = function(weatherData) {

  $("#main-trail-temp").text(`Temp: ${weatherData.current.temp}` + "°F");
  $("#main-trail-humid").text(`Humidity: ${weatherData.current.humidity}` + "%");
  $("#main-trail-wind").text(`Wind Speed: ${weatherData.current.wind_speed}` + " mph");
}

$("#search").on("click", trailSearch);

}
//comment
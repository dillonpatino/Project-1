var searchHistory = []
var prevCitySearched = ""

var cityWeather = function(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=33a442ce0b1dad52f9352616c57d9d69&units=imperial";
    var geoLocation = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=33a442ce0b1dad52f9352616c57d9d69"
    fetch(geoLocation)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data);
        getoneCall(data, city);
    })
};
function getoneCall(data, city) {
    var oneCall = "https://api.openweathermap.org/data/2.5/onecall?lat=" + data[0].lat + "&lon=" + data[0].lon + "&appid=33a442ce0b1dad52f9352616c57d9d69&units=imperial"
    fetch(oneCall)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data);
        displayWeather(data, city);
        displayFiveDay(data);
    })
  }

  var trailSearch = function(event) {


function weatherApiCall(){
    var weatherKey = '{e2ca5eb2bd8c415361262e3d9a4b2aa5}'
    fetch(https://api.openweathermap.org/data/2.5/weather?lat=43.700111&lon=-79.416298&appid={e2ca5eb2bd8c415361262e3d9a4b2aa5})
    }

  
function weatherApiCall(){
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=43.700111&lon=-79.416298&appid={e2ca5eb2bd8c415361262e3d9a4b2aa5}')
    }


var requestUrl = '';
var fetchButton = document.getElementById('search');


var trailSearch = function(event) {

  event.preventDefault();

  var trailName = $("#trailname").val().trim()

  if (trailName) {
      trailWeather(trailName);

      $("#trailname").val("");
    } else {
      alert("Enter a trail name");
  }
};

var displayWeather = function(weatherData, city) {
  $("#main-trail-temp").text(`Temp: ${weatherData.current.temp}` + "°F");
  $("#main-trail-humid").text(`Humidity: ${weatherData.current.humidity}` + "%");
  $("#main-trail-wind").text(`Wind Speed: ${weatherData.current.wind_speed}` + " mph");
  $("#search").on("click", trailSearch);
  $("#main-trail-wind").text(`Wind Speed: ${weatherData.current.wind_speed}` + " mph");
}



function weatherApiCall(){
    fetch(https://api.openweathermap.org/data/2.5/weather?lat=43.700111&lon=-79.416298&appid={api key})
    
}
 weather-function
function(){
    }

var requestUrl = '';
var fetchButton = document.getElementById('search');

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)



    L.mapquest.key = 'KEY';
var baseLayer = L.mapquest.tileLayer('dark');
          
L.mapquest.geocoding().geocode(['New York, NY'], showMap);

function showMap(err, data) {
  var map = createMap();
  map.addControl(L.mapquest.control());
  addLayerControl(map);
}

function createMap() {
  var map = L.mapquest.map('map', {
    center: [40.7237, -73.9825],
    zoom: 14,
    layers: baseLayer
  });
  return map;
}

function addLayerControl(map) {
  L.control.layers({
    'Map': L.mapquest.tileLayer('map'),
    'Satellite': L.mapquest.tileLayer('satellite'),
    'Hybrid': L.mapquest.tileLayer('hybrid'),
    'Light': L.mapquest.tileLayer('light'),
    'Dark': baseLayer
  }, {}, { position: 'topleft'}).addTo(map);
}

fetchButton.addEventListener('click', getApi);


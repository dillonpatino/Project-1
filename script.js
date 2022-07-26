function weatherApiCall(){
    var weatherKey = '{e2ca5eb2bd8c415361262e3d9a4b2aa5}'
    fetch(https://api.openweathermap.org/data/2.5/weather?lat=43.700111&lon=-79.416298&appid={e2ca5eb2bd8c415361262e3d9a4b2aa5})
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


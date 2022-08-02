
const log = console.log;

function getParkData() {
  var requestUrl = "https://developer.nps.gov/api/v1/parks?stateCode=UT&api_key=3RvM0wPt95K9Bd1Hsb6l0GvKPxftZG5gMBZJe0Ic";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("Sending park info")
      console.log(data)
      var parkData = generateParkList(data)
      // displayParkData(parkData);
    })
}

const parkNameElement = document.getEle

function getSingleParkData(parkCode) {
  var requestUrl = "https://developer.nps.gov/api/v1/thingstodo?parkCode=" + parkCode + "&api_key=3RvM0wPt95K9Bd1Hsb6l0GvKPxftZG5gMBZJe0Ic";
  console.log(parkCode)

  fetch(requestUrl)
  .then(function (response) {
    return response.json()
  })
  .then(function (response) {

    // TODO: Loop over all activities and display in the page
    const activities = response.data;
    for (let i = 0; i < activities.length; i++) {
      const activityEl = $('<div>').text(activities[i].shortDescription);
      const br = $('<br>');
      activityEl.append(br)
      $("#main-park-name").append(activityEl);

    }
    console.log("Activities Data: ", activities);
  })
    // cityWeather();

}


var searchHistory = []
var prevCitySearched = ""

function cityWeather(city) {

  var geoLocation = `http://api.openweathermap.org/geo/1.0/zip?zip=${city},US&appid=33a442ce0b1dad52f9352616c57d9d69`
  fetch(geoLocation)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log("Called city Weather " + city)
      console.log(data);
      getoneCall(data.lat, data.lon);
      // getParkData()
    })
};
function getoneCall(lat, lon) {
  var oneCall = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=33a442ce0b1dad52f9352616c57d9d69&units=imperial"
  fetch(oneCall)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data);
      displayWeather(data);
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


function displayWeather(weatherData) {
  $("#main-trail-name").text
  $("#main-trail-condition").text(`Cond: ${weatherData.current.weather[0].description}`);
  $("#main-trail-temp").text(`Temp: ${weatherData.current.temp}` + "°F");
  $("#main-trail-humid").text(`Humidity: ${weatherData.current.humidity}` + "%");
  $("#main-trail-wind").text(`Wind Speed: ${weatherData.current.wind_speed}` + " mph");

}



  
  function displayParkData(parkData) {
  console.log(parkData)

  parkData.forEach((park) => {
    const aNode = document.createElement("a");
    aNode.setAttribute("id", park.parkName);
    const node = document.createElement("li");
    const textnode = document.createTextNode(park.parkName);
    aNode.appendChild(node);
    node.appendChild(textnode);
    document.getElementById("park-name-holder").appendChild(aNode);
    // $(document.getElementById(park.parkName)).on("click", function () {alert (park.parkName + ' was clicked')});
    $(document.getElementById(park.parkName)).on("click", function () { getoneCall(park.latitude, park.longitude) });

  });

}

function test(lat, long) {
  console.log("Lat:" + lat + " Long:" + long)
}
function generateParkList(data) {
  parkList = []

  data.data.forEach((park) => {
    parkList.push({ parkName: park.fullName, latitude: park.latitude, longitude: park.longitude })

  });

  return parkList;
}

// $("#search").on("click", trailSearch);

let dropdown = document.getElementById('parks-dropdown');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose Park';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'https://developer.nps.gov/api/v1/parks?stateCode=UT&api_key=3RvM0wPt95K9Bd1Hsb6l0GvKPxftZG5gMBZJe0Ic';

// function that populates the dropdown menu.
fetch(url)
  .then(
    function (response) {
      if (response.status !== 200) {
        console.warn('Error. Status Code: ' + response.status);
        return;
      }
      response.json().then(function (data) {
        console.log(data)
        let parksArray = data.data;
        let option;

        for (let i = 0; i < parksArray.length; i++) {
          option = document.createElement('option');
          option.setAttribute("id", parksArray[i].parkCode);
          option.setAttribute("name", parksArray[i].addresses[0].postalCode);
          //add onclick to each element to call get parkData(parkCode)
          option.text = parksArray[i].fullName;
          option.value = parksArray[i].parkCode;
          dropdown.add(option); 
        }
      });
    })
  .catch(function (err) {
    console.error('Fetch Error -', err);
  });

 

  
  // $(window).on("load", getParkData);
  //comment
  
  function handleParkClick() {
  //call weather service for park
  //call getParkData(parkCode)
}

$("#parks-dropdown").on("change", function(event) {
  const parkCode = this.value;
  console.log("Value: ", parkCode);
  var zipcode = $(this).find(":selected")[0].attributes[1].value;
  console.log(zipcode);
  getSingleParkData(parkCode);
  cityWeather(zipcode);
});
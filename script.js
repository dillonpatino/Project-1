function getApi() {
    var requestUrl = 'http://www.mapquestapi.com/search/v2/radius?key=9ODBlqwdopmVqeGPPP1PrrUCI0uUXEOG&maxMatches=4&origin=39.750307,-104.999472';
    }
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
    
      }

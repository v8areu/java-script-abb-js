// equivalent to document ready function jquery
document.addEventListener('DOMContentLoaded', function() {
  
  // ======== AUXILIARY FUNCTIONS/HELPER FUNCTIONS =============
  // function for decode HTML code
  function decodeEntities(encodedString) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = encodedString;
    return textArea.value;
  }
  
  // function for calculate farhenheit from celcius and vise versa
  function celciusFarenheitChange(unit, value) {
    if (unit == "C") {
      return (value*(9/5) + 32);
    } else if (unit == "F") {
      return ((value - 32)*(5/9));
    } else {
      alert("unit is wrong");
      return false;
    }
  }
  
  // ============= MAIN FUNCTION ================
  function setWeatherInfo(weatherInfo) {

    let qWeatherInfo = document.querySelector(".weather-info");
    let pWeatherInfo = 
        document.createTextNode(
          weatherInfo["city"] +
          ", " + 
          weatherInfo["country"]
        );
    
    let temperatureUnits = "C";
    let temperatureValue = weatherInfo["temperature"];
    let pWeatherTemperature = document.createElement("p");   
    
    pWeatherTemperature
      .appendChild(
        document.createTextNode(temperatureValue)
      );
      
    pWeatherTemperature
      .appendChild(
        document.createTextNode(" " + decodeEntities("&deg;"))
      );
    
    pWeatherTemperature
      .appendChild(
        document.createElement("a")
      )
      .appendChild(
        document.createTextNode(temperatureUnits)
      );
    
    pWeatherTemperature.getElementsByTagName("a")[0]
      .setAttribute("href", "#");
    
    pWeatherTemperature.getElementsByTagName("a")[0]
      .setAttribute("onclick", "return false;");
    
    pWeatherTemperature
      .childNodes[2]
      .addEventListener('click', function(e) {   
        let temperatureValue = pWeatherTemperature.firstChild.nodeValue;
        let temperatureUnits = pWeatherTemperature.childNodes[2].firstChild.nodeValue;
        pWeatherTemperature.firstChild.nodeValue = celciusFarenheitChange(
          temperatureUnits, temperatureValue);
        if (pWeatherTemperature.childNodes[2].firstChild.nodeValue === "F") {
          pWeatherTemperature.childNodes[2].firstChild.nodeValue = "C";
        } else {
          pWeatherTemperature.childNodes[2].firstChild.nodeValue = "F";
        }
      
    }, false);

    let pWeatherStatus = 
      document.createTextNode(
        weatherInfo["status"] +
        ": " +
        weatherInfo["description"]
      );
     
    // add new line
   qWeatherInfo
     .appendChild(document.createElement("br"));
   
    // add the weather info city and country
    qWeatherInfo
      .appendChild(document.createElement("p"))
      .appendChild(pWeatherInfo);
    
    // add new line
   qWeatherInfo
     .appendChild(document.createElement("br"));
    
    // add temperature info
    qWeatherInfo
      .appendChild(pWeatherTemperature);
    
    // add new line
    qWeatherInfo
      .appendChild(document.createElement("br"));
    
    // add weather status info
    qWeatherInfo
      .appendChild(document.createElement("p"))
      .appendChild(pWeatherStatus);
     
    // add new line
    qWeatherInfo
      .appendChild(document.createElement("br"));
    
    let weatherIcon = document.createElement("img");
    weatherIcon.setAttribute("src", weatherInfo["iconURL"]);
    
    qWeatherInfo
      .appendChild(weatherIcon);
  }
  // get JSON function
  function parseJSON(jsonUrl) {
    
    let data;
    let request = new XMLHttpRequest();
    
    request.open('GET', jsonUrl, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {

        // Success!
        data = JSON.parse(request.responseText);
        
        // work the data here!
        // get the weather information       
        let weatherInfo = {};
        
        // weather status
        weatherInfo["status"] = data.weather[0].main;
        
        // get the weather descriptive information
        weatherInfo["description"] = data.weather[0].description;
        
        // get the weather symbol url
        weatherInfo["iconURL"] = data.weather[0].icon;
        
        // get the temperature
        weatherInfo["temperature"] = data.main.temp;
                
        // country info
        weatherInfo["country"] = data.sys.country;
        
        // city info
        weatherInfo["city"] = data.name;
        
        setWeatherInfo(weatherInfo);
      } else {
       
        // We reached our target server, but it returned an error
      }
    };
    
    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
  }
  
  // fcc weather function
  function wikiApi(lon, lat) {
    let weatherBASE = 'https://fcc-weather-api.glitch.me';
    let weatherAPI = '/api/current';
    let weatherLON = '?lon=' + lon;
    let weatherLAT = '&lat=' + lat;
    
    let weatherURL = weatherBASE + weatherAPI + weatherLON + weatherLAT;
    
    parseJSON(weatherURL);
    //let jsonData = parseJSON(weatherURL);

  }
    
  //let lon, lat;
  function showPosition(position) {
    
    lon = position.coords.longitude;
    lat = position.coords.latitude;
    
    wikiApi(lon, lat);

  }
  
	function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("geolocation is not supported");
    }
  }
  
  // load the function when page loads 
  window.onload = getLocation;

});


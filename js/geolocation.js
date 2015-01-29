function getmyLocation(){
   navigator.geolocation.getCurrentPosition(onSuccess, onError); 
    
}

    // onSuccess Geolocation
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '           +               + '<br />' +
                            'Longitude: '          +              + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          +                                             + '<br />';
localStorage.setItem("latitude", position.coords.latitude);
localStorage.setItem("longitude", position.coords.longitude);
var offset = datetoday.getTimezoneOffset() * 60;
var timeGPS = position.timestamp + offset;
alert(timeGPS);
//currentdate.getHours() + ':' + currentdate.getSeconds(); + '(' + currentdate.getDate() + '/' + (currentdate.getMonth()+1)  + '/' + currentdate.getFullYear() + ')';
localStorage.setItem("formatted_address", timeGPS);
var formatted_address_placeholder = localStorage.getItem("formatted_address");
if (formatted_address_placeholder != 'null'){$$('#fulladdressf').attr("placeholder",formatted_address_placeholder);document.getElementById("fulladdressf").value = formatted_address_placeholder;}
functionEmpty();
    mainView.router.loadPage('index.html');
        
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
    }


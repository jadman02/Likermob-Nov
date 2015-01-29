function getmyLocation(origin){
   navigator.geolocation.getCurrentPosition(onSuccess, onError); 
    
}

    // onSuccess Geolocation
    //
    function onSuccess(position) {
localStorage.setItem("latitude", position.coords.latitude);
localStorage.setItem("longitude", position.coords.longitude);
var datetoday1 = new Date();
var offset1 = datetoday1.getTimezoneOffset() * 60;
var timeGPS = position.timestamp + offset1;
alert(timeGPS);
//currentdate.getHours() + ':' + currentdate.getSeconds(); + '(' + currentdate.getDate() + '/' + (currentdate.getMonth()+1)  + '/' + currentdate.getFullYear() + ')';
localStorage.setItem("formatted_address", timeGPS);
var formatted_address_placeholder = localStorage.getItem("formatted_address");
if (formatted_address_placeholder != 'null'){$$('#fulladdressf').attr("placeholder",formatted_address_placeholder);document.getElementById("fulladdressf").value = formatted_address_placeholder;}
if (origin =='9'){mainView.router.loadPage('index.html');}
    
        
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
    }


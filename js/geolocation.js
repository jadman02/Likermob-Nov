function getmyLocation(){
   navigator.geolocation.getCurrentPosition(onSuccess, onError); 
    
}

    // onSuccess Geolocation
    //
    function onSuccess(position) {


localStorage.setItem("latitude", position.coords.latitude);
localStorage.setItem("longitude", position.coords.longitude);
var datetoday1 = new Date();
var offset1 = datetoday1.getTimezoneOffset() * 60;
var currentdate = position.timestamp + offset1;
alert(currentdate);
mainView.router.loadPage('index.html');
var timeGPS = currentdate.getHours() + ':' + currentdate.getSeconds() + '(' + currentdate.getDate() + '/' + (currentdate.getMonth()+1)  + '/' + currentdate.getFullYear() + ')';
alert(timeGPS);
$$('#fulladdressf').attr("placeholder",timeGPS);document.getElementById("fulladdressf").value = timeGPS;

        
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
    }


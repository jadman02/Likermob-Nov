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
var month = new Array(12);
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";

var day_name = new Array(7);
day_name[0] = "Sunday";
day_name[1] = "Monday";
day_name[2] = "Tuesday";
day_name[3] = "Wednesday";
day_name[4] = "Thursday";
day_name[5] = "Friday";
day_name[6] = "Saturday";
var d = new Date(currentdate);
var month_name = month[d.getUTCMonth()];
var weekday_name = day_name[d.getUTCDay()];
var day = d.getUTCDate();
var year = d.getUTCFullYear();
var hours = d.getUTCHours();
var minutes = d.getUTCMinutes();
mainView.router.refreshPreviousPage();
mainView.showNavbar();
var timeGPS = 'GPS ('+ hours + ':' + minutes + ',' + weekday_name  + ' ' + day  + ' ' + month_name + ')';
alert(timeGPS);
$$('#fulladdressf').attr("placeholder",timeGPS);document.getElementById("fulladdressf").value = timeGPS;

        
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
    }


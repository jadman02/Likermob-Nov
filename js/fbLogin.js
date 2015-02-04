document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //
     function onDeviceReady() {
var fbLoginSuccess = function (userData) {
    alert("UserInfo: " + JSON.stringify(userData));
    localStorage.setItem("register", "logged");
}

facebookConnectPlugin.login(["public_profile","email"],
    fbLoginSuccess,
    function (error) { alert("" + error) }
);
    }



//Share    
function sharePhoto(value,page_id,url,title,description){
facebookConnectPlugin.showDialog( 
    {
        method: "feed",
        picture: url,
        name: title,
        message: value,    
        caption: 'VIA LIKERMOB APP',
        description: description
    }, 
    function (response) { alert(JSON.stringify(response)) },
    function (response) { alert(JSON.stringify(response)) });
}

//Logout
function logoutFacebook(){
facebookConnectPlugin.logout(fbLoginSuccess, function (error) { alert("" + error) })
}

function fbLoginSuccess(){
alert('logged you out');
mainView.router.loadPage('register.html');
myApp.closePanel();
}

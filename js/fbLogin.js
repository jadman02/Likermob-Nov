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
    
function sharePhoto(){

facebookConnectPlugin.showDialog( 
    {
        method: "feed",
        picture:'https://www.google.co.jp/logos/doodles/2014/doodle-4-google-2014-japan-winner-5109465267306496.2-hp.png',
        name:'Test Post',
        message:'First photo post',    
        caption: 'Testing using phonegap plugin',
        description: 'Posting photo using phonegap facebook plugin'
    }, 
    function (response) { alert(JSON.stringify(response)) },
    function (response) { alert(JSON.stringify(response)) });

}

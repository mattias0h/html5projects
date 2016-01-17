var startPos;
var watchId;

function startTracking() {
    if(navigator.geolocation) {
        document.getElementById('startBtn').style.display = 'none';
        document.getElementById('stopBtn').style.display = 'inline';

        navigator.geolocation.getCurrentPosition(showPosition, showError);

        //watchId = navigator.geolocation.watchPosition(showPositionUpdate, showError);
    } else {
        alert('Not supported');
    }
}

function showPosition(position) {
    startPos = position;
    document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    document.getElementById('startLon').innerHTML = startPos.coords.longitude;
}

function showPositionUpdate(position) {
    document.getElementById('currentLat').innerHTML = position.coords.latitude;
    document.getElementById('currentLon').innerHTML = position.coords.longitude;
    document.getElementById('distance').innerHTML =
        calculateDistance(startPos.coords.latitude, startPos.coords.longitude, position.coords.latitude, position.coords.longitude);
}

function showError(error) {
    switch(error.code){
        case error.PERMISSION_DENIED:
            alert('Denied request of geolocation');
            break;
        case error.POSITION_UNAVAILABLE:
            alert('Location not available');
            break;
        case error.TIMEOUT:
            alert('Request Timed Out');
            break;
        case error.UNKNOWN_ERR:
            alert('Unknown Error');
    }
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = (lat2-lat1).toRad();
    var dLon = (lon2-lon1).toRad();
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d;
}
Number.prototype.toRad = function(){
    return this * Math.PI / 180;
}

function stopTracking() {
    navigator.geolocation.clearWatch(watchId);
    alert('Tracking Stopped');
    document.getElementById('stopBtn').style.display = 'none';
    document.getElementById('startBtn').style.display = 'inline';
}
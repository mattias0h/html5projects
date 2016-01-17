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
    document.getElementById('startLat').innerHTML = startPos.coord.latitude;
    document.getElementById('startLot').innerHTML = startPos.coord.longitude;
}

function showError(error) {

}
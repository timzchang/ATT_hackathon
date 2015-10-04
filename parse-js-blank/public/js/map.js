var pos;
var map;
var users;
	// This example creates a simple polygon representing the Bermuda Triangle.
	// When the user clicks on the polygon an info window opens, showing
	// information about the polygon's coordinates.
users = [{lat: 41.6993, lng: -86.23455},{lat: 41.69825, lng: -86.2341},{lat: 41.703, lng: -86.23427},{lat: 41.6967, lng: -86.2313}];
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 41.7030, lng: -86.2390},
		zoom: 14
	});
// geolocation
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			//drop pin at current location
			new google.maps.Marker({
				position: pos,
	    			map: map,
				title: 'My Location'
  			});
	   		}, function() {
      		handleLocationError(true, infoWindow, map.getCenter());
	    	});
  	} else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
	//users = JSON.parse(getUser());
	for (i=0; i<4; i++) {
	//	lat = users.list[0].lat;	latitude
	//	lng = users.list[0].lng;	longitude
	//	title = users.list[0].title;	title
		// dropPin(41.698+0.001*i, -86.234+0.001*i, "Test");
		dropPin(users[i].lat, users[i].lng, "Test");
	}
}

function dropPin (latval, lngval, titleval) {
	//drop other pins  **************
	new google.maps.Marker({
		position: {lat: latval, lng: lngval},
		map: map,
		title: titleval,
		icon: {
        		path: google.maps.SymbolPath.CIRCLE,
        		fillColor: '#FF0000',
        		fillOpacity: .2,
        		strokeColor: 'white',
        		strokeWeight: .5,
      	  		scale: 10
      		}
	});
}

//Polygon Array
function showArrays(event) {
  // Since this polygon has only one path, we can call getPath() to return the
  // MVCArray of LatLngs.
  var vertices = this.getPath();
  var contentString = '<b>main building polygon</b><br>' +
      'Clicked location: <br>' + event.latLng.lat() + ',' + event.latLng.lng() +
      '<br>';
  // Iterate over the vertices.
  for (var i =0; i < vertices.getLength(); i++) {
    var xy = vertices.getAt(i);
    contentString += '<br>' + 'Coordinate ' + i + ':<br>' + xy.lat() + ',' +
        xy.lng();
  }
  // Replace the info window's content and position.
  infoWindow.setContent(contentString);
  infoWindow.setPosition(event.latLng);
  infoWindow.open(map);
}


//geolocation
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}

function getLat() {
	return pos.lat;
}

function getLong() {
	return pos.lng;
}

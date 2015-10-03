var friendsout = 0;
var locationout = 0;

function togglefriends() {
	if(friendsout) {
		hidefriends();
	} else {
		popoutfriends();
	}
}

function togglelocation() {
	if(locationout) {
		hidelocation();
	} else {
		popoutlocation();
	}
}

function popoutfriends() {
	friendsout = 1;
	popout("friends");
	document.getElementById("friendarrow").src = "images/upArrow.png";
};

function popoutlocation() {
	locationout = 1;
	popout("locations");
	document.getElementById("locarrow").src = "images/upArrow.png";
};

function hidefriends() {
	friendsout = 0;
	hide("friends");
	document.getElementById("friendarrow").src = "images/dnArrow.png";
};

function hidelocation() {
	locationout = 0;
	hide("locations");
	document.getElementById("locarrow").src = "images/dnArrow.png";
};

function popout(id) {
	document.getElementById(id).style.height = "100%";
	updatemapwidth();
};

function hide(id) {
	document.getElementById(id).style.height = "10%";
	updatemapwidth();
};

function updatemapwidth() {
	if(friendsout) {
		document.getElementById("map").style.left = document.getElementById("friends").style.width;
	} else {
		document.getElementById("map").style.left = 0;
	}
	var friendwidthstr = document.getElementById("friends").style.width;
	var friendwidth = friendwidthstr.substr(0,friendwidthstr.length-2);
	var locwidthstr = document.getElementById("locations").style.width;
	var locwidth = locwidthstr.substr(0,locwidthstr.length-2);
	var newwidth = (window_width() - friendsout*(friendwidth) - locationout*(locwidth));
	setwidth("map",newwidth);
};
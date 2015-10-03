function checkin() {
	var text = document.getElementById("checkin").innerHTML;
	if (text==="<br>check in") {
		document.getElementById("checkin").innerHTML = "<br>check out";
	}
	else {
		document.getElementById("checkin").innerHTML = "<br>check in";
	}
};

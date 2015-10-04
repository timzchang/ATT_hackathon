function openDialog() {
	document.getElementById("dialog").style.display = "block";
	document.getElementById("dialogFadeout").style.display = "block";
}

function closeDialog(save) {
	document.getElementById("dialog").style.display = "none";
	document.getElementById("dialogFadeout").style.display = "none";
	if(save) {
		var name = document.getElementById("nameInput").value;
		var building = document.getElementById("buildingInput").value;
		var subject = document.getElementById("subjectInput").value;
		if(name==="tacospin" && building=="LaFortune" && subject=="tacos") {
			document.getElementById("map").innerHTML = "<embed id='tacospin' src=http://tacospin.com> </embed>";
			document.getElementById("tacospin").width = "700";
			document.getElementById("tacospin").height = "500";
		} else if(name==="development" && building=="Innovation Park" && subject=="irishhacks") {
			document.getElementById("bottom").style.display = "block";
		} else {
			checkin(name, building, subject);
		}
	}
}

Parse.initialize("cSHa81oGKG1Y3iVayTf5EfmrQ8DLt0Nb8797hJa3", "ZtZHoIzn1IfXu68c65mMikShyhXbiwu1Gv7VNa4g");
var UserProfile = Parse.Object.extend("UserProfile");
var hp = 99;

var LocationObject = Parse.Object.extend("LocationObject");

var BuildingObject = Parse.Object.extend("BuildingObject");
//var buildingObject = new BuildingObject();
/*buildingObject.save({name: "Building", count: 0}, {
	success: function(object) {
		$(".success").show();
	},
	error: function(model, error) {
		$(".error").show();
	}
});
*/

var query = new Parse.Query(BuildingObject);
query.equalTo("name", "Innovation Park");
query.first({
	success: function(object) {
		var buildingObject = object;
		var query2 = new Parse.Query(LocationObject);
		query2.equalTo("objectID");
		query2.count({
        		success: function(count) {
                		buildingObject.set("count", count);
                		buildingObject.save();
        		},
        		error: function(error) {
                		//failed
            		}
        	});

	},
	error: function(error) {
		//failed
	}
});
/*
var query = new Parse.Query(LocationObject);
query.equalTo("objectID");
query.count({
	success: function(count) {
		buildingObject.set("count", count);
		buildingObject.save();
	},
	error: function(error) {
                //failed
            }
        });*/

$("#add-button").click(function() {
	alert("Ya clicked me");
	var userProfile = new UserProfile();
	userProfile.set()
	userProfile.save({name: "Tim", health: hp--, sanity: 25}, {
		success: function(object) {
			$(".success").show();
			console.log("Ya succeeded");
		},
		error: function(model, error) {
			$(".error").show();
			console.log("Ya failed");
		}
	});
});


function checkin() {
	var text = document.getElementById("checkin").innerHTML;
	if (text==="<br>check in") {
		var locationObject = new LocationObject();
		locationObject.save({userID: 5, lat: getLat(), lon: getLong()}, {
			success: function(object) {
				$(".success").show();
                        },
                        error: function(model, error) {
                                $(".error").show();
                        }
                });
		var query3 = new Parse.Query(BuildingObject);
		query3.equalTo("name", "Innovation Park");
		query3.first({
        		success: function(object) {
                		var buildingObject = object;
				buildingObject.increment("count");
				buildingObject.save();
		        },
        		error: function(error) {
                		//failed
        		}
		});
		document.getElementById("checkin").innerHTML = "<br>check out";
	}
	else {
		document.getElementById("checkin").innerHTML = "<br>check in";
	}
};
/*
$("#checkin").click(function() {
	if(document.getElementById("checkin").innerHTML === "Check In") {
		var locationObject = new LocationObject();
		locationObject.save({userID: 5, lat: 25, lon: -5}, {
			success: function(object) {
				$(".success").show();
                        },
                        error: function(model, error) {
                                $(".error").show();
                        }
                });
                buildingObject.increment("count");
                buildingObject.save();
                document.getElementById("checkin").innerHTML = "Check Out";
	} else {
                document.getElementById("checkin").innerHTML = "Check In";
	}
});
*/

$("#del-button").click(function () {

	delUser();

});

$("#find-button").click(function () {
	alert(getUser());
});

// This function searches
function getUser(){
	var query = new Parse.Query(LocationObject);
	// query.equalTo("health",100);
	var results = query.find({
		success: function(result){
			console.log("found");
			// result is the array of LocationObject
			// put functions in here to modify html.
			// members of the LocationObject class are:
			// lat
			// long
			// UserID
		}, error: function(model, error){
			console.log("not found");
		}
	});
}


// This function searches for LocationObjects that meet constraints and deletes them
function delUser(){
	var query = new Parse.Query(LocationObject);
	// query.equalTo("health",100);
	// constraints here.
	query.find({
		success: function(results){
			console.log("found");
			for(var i=0;i<results.length;i++){
				results[i].destroy({
					success: function(object){
						console.log("destroyed object");
					},
					error: function(model, error){
						console.log("couldn't destroy");
					}
				});
			}
			return results;
		}, error: function(model, error){
			console.log("not found");
		}
	});
}


Parse.initialize("cSHa81oGKG1Y3iVayTf5EfmrQ8DLt0Nb8797hJa3", "ZtZHoIzn1IfXu68c65mMikShyhXbiwu1Gv7VNa4g");
var UserProfile = Parse.Object.extend("UserProfile");
var hp = 99;

var LocationObject = Parse.Object.extend("LocationObject");

                var BuildingObject = Parse.Object.extend("BuildingObject");
                var buildingObject = new BuildingObject();
                buildingObject.save({name: "Building", count: 0}, {
                        success: function(object) {
                                $(".success").show();
                        },
                        error: function(model, error) {
                                $(".error").show();
                        }
                });

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
                });


$("#test-button").click(function() {
	alert("Ya clicked me");
	var userProfile = new UserProfile();
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

$("#add").click(function() {
	if(document.getElementById("add").value == "Check In") {
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
                document.getElementById("add").value = "Check Out";
	} else {
                document.getElementById("add").value = "Check In";
	}
});


$("#del-button").click(function () {

	getUser();

});

function getUser(){
	var query = new Parse.Query(UserProfile);
	// query.equalTo("health",100);
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
		}, error: function(model, error){
			console.log("not found");
		}
	});
}

userProfile.save({name: "Tim", health: 100, sanity: 25}, {
	success: function(object) {
		$(".success").show();
		console.log("Ya succeeded");
	},
	error: function(model, error) {
		$(".error").show();
		console.log("Ya failed");
	}
});

Parse.initialize("cSHa81oGKG1Y3iVayTf5EfmrQ8DLt0Nb8797hJa3", "ZtZHoIzn1IfXu68c65mMikShyhXbiwu1Gv7VNa4g");

var UserProfile = Parse.Object.extend("UserProfile");
var userProfile = new UserProfile();
var hp = 99;


$("#test-button").click(function() {
	// alert("Ya clicked me");

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

$("#del-button").click(function () {

	getUser();

});

function getUser(){
	var query = new Parse.Query(UserProfile);
	query.equalTo("health",100);
	query.find({
		success: function(object){
			console.log("found");
			$(event.results).destroy({
				success: function(object){
					console.log("destroyed object");
				},
				error: function(model, error){
					console.log("couldn't destroy");
				}
			})
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
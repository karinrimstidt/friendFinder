//
var friends = require("./app/data/friends.js")

// Routes
// We export this function to make it accessible to other files using require.

module.exports = function(app){

router.get("/api/friends", function(req, res) {
  res.json(friends);
});

router.post("/api/friends", function(req, res) {
friends.push(req.body);
 
var currentUserGrade = req.body.grade;

var result = []

	for (var i=0; i < friends.length; i++){
		if(currentUserGrade == friends[i].grade){
			result.push(friends[i])
		}
	}

	res.send(result[0])

	});

};
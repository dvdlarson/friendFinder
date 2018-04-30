// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData = require("../data/friends.js");
var path = require("path");

var answerDifference=0;

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/home.html"));
  // });
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    return res.json(friendData);
  });


  // API POST Requests
  // handles when a user submits the form and submits survey data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

 
    
    // req.body is available since we're using the body-parser middleware
   

	app.post('/api/friends', function(req, res){

		var matchPerson = {
			name: "",
			image: "",
			matchDifference: 1000
		};
		var userData 	= req.body;
		var userName 	= userData.name;
		var userImage 	= userData.image;
		var uerScores 	= userData.scores;

		var totalDifference = 0;

		//loop through the friends data array of objects to get each friends scores
		for(var i = 0; i < [friends].length-1; i++){
      console.log(friends[i].name);
			totalDifference = 0;

			//loop through that friends score and the users score and calculate the 
			// absolute difference between the two and push that to the total difference variable set above
			for(var j = 0; j < 10; j++){
				// calculate difference between the scores 
				totalDifference += Math.abs(parseInt(usrScores[j]) - parseInt(friends[i].scores[j]));
				// If the sum of differences is less than current "best match"
				if (totalDifference <= matchPerson.matchDifference){

					// Reset the bestMatch to be the current friend. 
					matchPerson.name = friends[i].name;
					matchPerson.photo = friends[i].photoURL;
					matchPerson.matchDifference = totalDifference;
				}
			}
		}
//addUser(req.body) ==> send the new record to the database
		friends.push(userData);
 
		res.json(matchPerson);
  });

};

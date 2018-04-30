// Survey questions
var questions = [
	"My goals in life are clear.",
	"If people are rude to me, I just shrug it off.",
	"I don't practice what I preach because I'm not the kind of person I'm preaching to.",
	"The stupider it looks, the more important it probably is.",
	"I consistently strive to slack off as much as possible.",
	"I prefer to achieve my own goals rather than helping others achieve theirs.",
	"I would describe myself as an extremely confident person.",
	"Chaos in my life helps me focus.",
	"I prefer to relax in the safety of my own delusions.",
	"Too much is always better than not enough."
];

// Choices for personality questions.
var choices = [
    '1 (Strongly Disagree)',
    '2',
    '3',
    '4',
    '5 (Strongly Agree)'
];

$(document).ready(function() {
	// link to div where questions will be inserted and initialize counter to 0.
    var questions = $('#questions');
    var i = 0;
    // For each question, create a div.
    questions.forEach(function (question) {
        i++;
        // Fill that div with a header, the question, and the choices selector.
        var item = $('<div class="question">');
        var headline = $('<h3>').text('Question ' + i);
        var questionText = $('<p>').text(question);
        var dropDown = $('<div class="form-group">');
        var select = $('<select class="form-control selector">');
        // Create an option for each choice.
        choices.forEach(function(choice) {
            var option = $('<option>').text(choice);
            select.append(option);
        });
        select.attr('id', 'select' + i);
        // Add the dropdown to the item, then add the item to the questions div.
        dropDown.append(select);
        item.append(headline, questionText, dropDown);
        var br = $('<br>');
        questionDiv.append(item, br);
    });

// Event handler for when the form is submitted.
$('#submitForm').on('click', function(event) {
  	// Prevent reload.
    event.preventDefault();

    // Capture name and photo link values.
    var userName = $('#name').val();
    var photoURL = $('#photoURL').val();
    console.log("name " + userName + " url " + photoURL);
    // If both of those items were filled out, gather other answers and submit.
    if (userName.length > 0 && photoURL.length > 0) {
        var answers = [];

        // Add the response for each selector to the array of answers.
        Object.keys($('.selector')).forEach(function(key) {
            if (answers.length < questions.length) {
                // Take only the first character of the answer, which is the number.
                answers.push($('.selector')[key].value.charAt(0));
            }
        });

        // Put the data in object form.
        var surveyData = {
            name: userName,
            photo: photoURL,
            answers: answers
        };

        // POST the data to /api/friends.
        $.post('/api/friends', surveyData, function(data) {        
            // Use data callback to display result.
            if (data) {
                // Empty out modal, username and link fields.
                $('#modalContent').empty();
                $('#name').val('');
                $('#photoURL').val('');

                // The results are in array form. For each object, grab the name and URL.
                data.forEach(function(profile) {
                    var userInfo = $('<div class="profile">');
                    var name = profile.name;
                    var photoURL = profile.photo;
                    // Put the name in a header.
                    var nameHeader = $('<h3>').text(name);
                    // Add a photo with a 'src' of the photoURL submitted.
                    var photo = $('<img>').attr('src', photoURL);
                    userInfo.append(nameHeader, photo);

                    // Add these items to the modal.
                    $('#modalContent').append(userInfo);
                });

                // If there is a tie for the best match and so you have more than one,
                if (data.length > 1) {
                    // Make sure the header is plural.
                    $('.modal-title').text('Your best matches!');
                } else {
                    // Make sure the header is singular.
                    $('.modal-title').text('Your best match!');
                };

                // Display the result modal.
                $('#matchModal').modal();
            }
        });
    // If either name or URL is missing, show the error modal.
    } else {
        $('#errorModal').modal();
        // The error modal will disappear after 2 seconds.
        setTimeout(function() {
            $('#errorModal').modal('hide');
        }, 2000);
    }
   });
});
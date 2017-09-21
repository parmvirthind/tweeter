/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$ (function () {

//Create a directory of tweets and apply to our container
function renderTweets(tweets) {
  $('#tweets-container').empty();
  for (var i in tweets) {
    var $tweets = createTweetElement(tweets[i]);
    $('#tweets-container').prepend($tweets);
  }
}


//Responses based on clicking the 'tweet' button. Ajax post request with callback function if successful
$("form").on("submit", function(event) {
  event.preventDefault();
  var text = $('textarea[name="text"]').val();
  var textLength = text.length;
  if (text === "" || text === null) {
    alert("Please enter a tweet!");
  } else if (textLength > 140) {
    alert("You have entered more than 140 characters!")
  } else {
    var serialized = $(this).serialize();
    $.post("/tweets", serialized, loadTweets);
    $('.new-tweet form textarea').val("");
    $('.counter').text(140);
  }
})

//Will retrieve tweets from database
function loadTweets() {
  $.getJSON('/tweets', function(data) {
    renderTweets(data);
  })
}

//Calling function to show tweets on initial load
loadTweets();


function createTweetElement(tweetData) {
  //Create variables for content you need
  var $tweet = $("<article>").addClass("tweet");
  var avatar = tweetData.user.avatars.small;
  var handle = tweetData.user.handle;
  var tweetContent = tweetData.content.text;
  var name = tweetData.user.name;
  var timeCreated = tweetData.created_at;
  timeCreated = moment(timeCreated).fromNow();
console.log(timeCreated);


  //Create header variables
  var header = $('<header>');
  var img = $('<img>').attr("src", avatar);
  var h2 = $('<h2>').text(name);
  var h5 = $('<h5>').text(handle);

  //Append header to $tweet
  header.append(img, h2, h5);
  $tweet.append(header);

  //Create tweet variables and append to $tweet
  var div = $("<div>").addClass("tweetText");
  var p = $('<p>').text(tweetContent);
  div.append(p);
  $tweet.append(div);

  //Create footer variables
  var footer = $('<footer>');
  var pFoot = $('<p>').text(timeCreated);
  var icons = $('<div>').addClass("icons");
  var i1 = $('<i>').attr("class", "fa fa-flag", "aria-hidden", "true");
  var i2 = $('<i>').attr("class", "fa fa-retweet", "aria-hidden", "true");
  var i3 = $('<i>').attr("class", "fa fa-heart", "aria-hidden", "true");

  //Append variables to footer and footer to $tweet
  icons.append(i1, i2, i3);
  footer.append(pFoot, icons);
  $tweet.append(footer);

  return $tweet;
}

//Adds functionality to compose button in navigation bar
$('#compose').on('click', function() {
  $('.new-tweet').slideToggle();
  $('.new-tweet textarea').focus();
});

});
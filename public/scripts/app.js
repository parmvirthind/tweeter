/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$ (function () {

var tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

function createTweetElement(tweetData) {
  //Create variables for content you need
  var $tweet = $("<article>").addClass("tweet");
  var avatar = tweetData.user.avatars.small;
  var handle = tweetData.user.handle;
  var tweetContent = tweetData.content.text;
  var name = tweetData.user.name;
  var timeCreated = tweetData.created_at;

  //Create header variables
  var header = $('<header>');
  var img = $('<img>').attr("src", avatar);
  var h2 = $('<h2>').text(name);
  var h5 = $('<h5>').text(handle);

  //Append header to $tweet
  header.append(img, h2, h5);
  $tweet.append(header);

  //Create tweet variables and append to $tweet
  var div = $("<div>");
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

console.log(footer)
  return $tweet;
}

var $tweet = createTweetElement(tweetData);

console.log($tweet);
$('#tweets-container').append($tweet);

});
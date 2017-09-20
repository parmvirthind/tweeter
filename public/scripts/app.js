/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$ (function () {

var data = [
  {
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function renderTweets(tweets) {
  for(var i in tweets) {
    var $tweets = createTweetElement(tweets[i]);
    $('#tweets-container').append($tweets);
  }

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

renderTweets(data);

});
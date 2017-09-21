$ (function() {
  $(".new-tweet form textarea").on("keyup", function() {
    //calculating how many characters are left in tweet
    const charLeft = 140 - $(this).val().length;

    //Updating counter in compose tweet box
    const counter = $(this).parent().find(".counter");
    counter.text(charLeft);

    //Changing colour of the counter based on number of characters in compose tweet box
    if(charLeft < 0) {
      counter.css("color", "red");
    } else if (charLeft > 0) {
      counter.css("color", "#244751")
    }

  })
});
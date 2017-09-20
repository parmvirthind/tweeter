$ (function() {
  $(".new-tweet form textarea").on("keypress", function() {
    const charLeft = 140 - $(this).val().length;

    const counter = $(this).parent().find(".counter");
    counter.text(charLeft);

    if(charLeft < 0) {
      counter.css("color", "red");
    }
  })
});
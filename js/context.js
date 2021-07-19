$(document).ready(function() {
  var m = $(".menu");

  m.addClass("fa-bars");
});

$(document).on("click", ".menu", function() {
  if ($(".menu").hasClass("fa-bars")) {
    $(".menu")
      .removeClass("fa-bars")
      .addClass("fa-times");
  } else {
    $(".menu")
      .removeClass("fa-times")
      .addClass("fa-bars");
  }
});

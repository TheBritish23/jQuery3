$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").css("background-color", "green");
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").css("background-color", "yellow");
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").css("background-color", "red");
    $("body").addClass("red-background");
  });
});

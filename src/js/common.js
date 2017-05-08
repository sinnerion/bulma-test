$(document).ready(function () {

  // Empty links prevent default
  $("a[href='#']").click(function(e){
    e.preventDefault();
  });

  $(".main-nav_open").on("click", function() {
    $(".side-chat").addClass("side-chat-open");
    $("#content").css("margin-left", "310px");
    $(".main-nav").css("left", "250px");
    $(this).addClass("is-hidden");
    $(".main-nav_close").removeClass("is-hidden");
  });
  $(".main-nav_close").on("click", function() {
    $(".side-chat-open").removeClass("side-chat-open");
    $("#content").css("margin-left", "0");
    $(".main-nav").css("left", "0");
    $(this).addClass("is-hidden");
    $(".main-nav_open").removeClass("is-hidden");
  });
});

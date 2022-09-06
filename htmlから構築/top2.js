$(function(){
    $(".n-readmore").on("click", function() {
        $(this).toggleClass("on-click");
        $(".n-hide-text").slideToggle(1000);
    });
}); 




$(function(){
    //hamburger menu click
    $('#nav_toggle').click(function(){
      $("#top-head").toggleClass('open');
      $("nav").slideToggle(500);
    });
    //menu link click
    $('nav a').click(function(){
      if(window.innerWidth <= 680){
        $("#top-head").toggleClass('open');
        $("nav").slideToggle(500);
      }
    });
  });
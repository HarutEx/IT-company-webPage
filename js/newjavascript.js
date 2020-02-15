function show_social() {
   return this;
}

$(document).ready(function () {
   $("#login1").click(function () {
      $(".form").toggle();
   });

   $('.message a').click(function () {
      $('form').animate({
         height: "toggle",
         opacity: "toggle"
      }, "slow");
   });

   $("#joinus").click(function(){
   });
});

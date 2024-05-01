"use strict"; // Enable strict mode globally

$(document).ready(function(){
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 3000, // Change slide every 3 seconds
      dots: true, // Show dots navigation
      arrows: true // Show arrows navigation
    });
});

$( function() {
    $( "#datepicker" ).datepicker();
  } );
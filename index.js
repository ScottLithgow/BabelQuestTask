// Jquery used to cut down boiler plate and speed up development.

// vanilla js selector and css mainultion  example.
//Document.querySelector('element').style.backgroundColor = 'red;

//jQuery Example
//$('.element').css('background-color', 'red');

$(document).ready(function () {

    //checks screen size is greater than 1000px before allowing animation
    if (screen.width >= '1000') {
      // Resizes background on mouse over/out events
      $(".hero").mouseover(function () {
        $(this).css("background-size", "65%");
      });

      $(".hero").mouseout(function () {
        $(this).css("background-size", "60%");
      });

      $(".mobile").mouseover(function () {
        $(this).css("background-size", "50%");
      });

      $(".mobile").mouseout(function () {
        $(this).css("background-size", "30%");
      });
    }
  
    //animates position of background images for svgCard elements on mouse events
  $(".svgCard").mouseover(function () {
    $(this).css("background-position", "75% 50%");
  });

  $(".svgCard").mouseout(function () {
    $(this).css("background-position", "20% 50%");
  });

  
});

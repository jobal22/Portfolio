//This allows the menu button to be interactive
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

//This allows for the nav buttons to redirect. 
//The -150 calculates the top of the screen into the equation
//so that it redirects to the proper heigth.
$(".jumper").on("click", function( e ) {
    
    e.preventDefault();

    $("body, html").animate({ 
        scrollTop: $( $(this).attr('href') ).offset().top - 150
    }, 600);
    
});
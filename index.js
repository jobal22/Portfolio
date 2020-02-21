function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

//not working for me
$(".jumper").on("click", function( e ) {
    
    e.preventDefault();

    $("body, html").animate({ 
        scrollTop: $( $(this).attr('href') ).offset().top - 150
    }, 600);
    
});
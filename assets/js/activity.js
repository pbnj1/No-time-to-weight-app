var nextButton = document.getElementById("activityNextPageBtn")
var exVal = document.querySelector('input[id = "ex-choice"]')

function gohome() {
    document.location = "index.html"
}

$( function() {
    var handle = $( "#custom-handle" );    
    var availableTags = [
        "Run",
        "Walk",
        "Darts",
        "Shuffleboard",
        "Raking lawn",
        "Aerobics",
        "Stairs",
        "Steps",
        "Rowing",
        "Cycling",
        "Bicycling",
      ];

    $( "#exerciseSearch" ).autocomplete({
        source: availableTags
      });

    //Assigns current slider value to the slider for user visual
    $( "#slider" ).slider({
        value:30,
        max: 120,
        create: function() {
            handle.text( $( this ).slider( "value" ) );
        },
        slide: function( event, ui ) {
            handle.text( ui.value ); 
        }
    });
  } );


nextButton.addEventListener("click", gohome)



var mealSxn = document.getElementById("sgst-returned");
var mealVal = document.querySelector('input[id = "meal-amt"]');
var snackVal = document.querySelector('input[id = "snack-amt"]');
var mealBtn = document.getElementById("mealBtn");

function mealDisplay() {
  if (mealVal.value === "" || mealVal.value <= 0) {
    document.getElementById("meal-amt").focus();
  } else {
    mealSxn.style.display = "flex";
  }
}


function exDisplay(){
  if (exVal.value ===""){
    document.getElementById("ex-choice").focus();
  }else(document.getElementById("ex-sgst").style.display = "flex")

}



exBTN.addEventListener("click", exDisplay)
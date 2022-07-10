var nextButton = document.getElementById("activityNextPageBtn")

function gohome() {
    document.location = "index.html"
}

$( function() {
    var handle = $( "#custom-handle" ); 
    //List of words able to autocomplete   
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

      //Identifies the id of input to autocomplete
    $( "#ex-choice" ).autocomplete({
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

function exDisplay(){
    
document.getElementById("ex-sgst").style.display = "flex";
console.log((document.querySelector('input[id = "ex-choice"]').value))
}



exBTN.addEventListener("click", exDisplay)
var nextButton = document.getElementById("activityNextPageBtn")

function gohome() {
    document.location = "index.html"
}

$( function() {
    var handle = $( "#custom-handle" );
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
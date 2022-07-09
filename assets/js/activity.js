var nextButton = document.getElementById("activityNextPageBtn")

function gohome() {
    document.location = "index.html"
}

$( function() {
    var handle = $( "#custom-handle" );    
    var availableTags = [
        "Run",
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

var nextButton = document.getElementById("activityNextPageBtn");
var exVal = document.querySelector('input[id = "ex-choice"]');
var Key = "FbfFoXfcu1pqZGL1wfm5ng==s1ZwGIbhzW13ihcu";
var card1 = document.getElementById("exercise-holder");

function gohome() {
  document.location = "index.html";
}

$(function () {
  var handle = $("#custom-handle");
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

  $("#exerciseSearch").autocomplete({
    source: availableTags,
  });

  //Assigns current slider value to the slider for user visual
  $("#slider").slider({
    value: 30,
    max: 120,
    create: function () {
      handle.text($(this).slider("value"));
    },
    slide: function (event, ui) {
      handle.text(ui.value);
    },
  });
});

nextButton.addEventListener("click", gohome);

function exDisplay() {
  if (exVal.value === "") {
    document.getElementById("ex-choice").focus();
  } else document.getElementById("ex-sgst").style.display = "flex";
}

exBTN.addEventListener("click", exDisplay);




function exSearch(){
  var val =$('#slider').slider("value")
  var queryURL = "https://api.api-ninjas.com/v1/caloriesburned?&activity=" + exVal.value + "&duration=" + val;
  fetch(queryURL, {
    headers:{ "X-Api-Key": "FbfFoXfcu1pqZGL1wfm5ng==s1ZwGIbhzW13ihcu"}
  })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        console.log(data[0].name)
        console.log(data[0].total_calories)
        

        for (let i =0; i<3; i++){
          console.log(data)
          var exercise1 = document.createElement("div")
          exercise1.textContent =  "your first exercise is to " + exVal.value + ".  Great Pick! You will burn " + data[0].total_calories + "!";
          card1.append(exercise1)
        }
      });

}

exBTN.addEventListener("click", exSearch);

var nextButton = document.getElementById("activityNextPageBtn");
var exVal = document.querySelector('input[id = "ex-choice"]');
var Key = "FbfFoXfcu1pqZGL1wfm5ng==s1ZwGIbhzW13ihcu";
var card1 = document.getElementById("exercise-holder1");
var card2 = document.getElementById("exercise-holder2");
var card3 = document.getElementById("ex-sgst");

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
        // console.log(data[0].name)
        // console.log(data[0].total_calories)
        

        for (let i =0; i<3; i++){
          console.log(data[i].name)

          
          var exercise1 = document.createElement("p")
          exercise1.setAttribute("class", "flex items-center justify-center w-full h-1/4 border-2 border-black ml-2 mt-6 mr-2 mb-2")
          exercise1.textContent =  "Your first suggested exercise is to " + data[i].name + ".  Great Pick! You will burn " + data[i].total_calories + " calories doing this for " + val + " minutes!";
          card3.append(exercise1)

        }

      });
     
}

exBTN.addEventListener("click", exSearch);



 // var exercise1 = document.createElement("p")
          // exercise1.setAttribute("class", "flex items-center justify-center w-full h-1/4 border-2 border-black ml-2 mt-6 mr-2 mb-2")
          // exercise1.textContent =  "your first suggested exercise is to " + data[0].name + ".  Great Pick! You will burn " + data[0].total_calories + " calories !";
          // card3.append(exercise1)

          // var exercise2 = document.createElement("p")
          // exercise2.setAttribute("class", "flex items-center justify-center w-full h-1/4 border-2 border-black ml-2 mt-6 mr-2 mb-2")
          // exercise2.textContent =  "your second suggested exercise is to " + data[1].name + ".  Great Pick! You will burn " + data[1].total_calories + " calories !";
          // card3.append(exercise2)

          // var exercise3 = document.createElement("p")
          // exercise3.setAttribute("class", "flex items-center justify-centerw-full h-1/4 border-2 border-black ml-2 mt-6 mr-2 mb-2")
          // exercise3.textContent =  "your second suggested exercise is to " + data[2].name + ".  Great Pick! You will burn " + data[2].total_calories + " calories !";
          // card3.append(exercise3)
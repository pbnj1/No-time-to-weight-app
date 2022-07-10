var restrictionBTN = document.querySelectorAll('input[name="restrictions"]');
var restrictionList = document.getElementById("restrictions");
var allergyBTN = document.querySelectorAll('input[name="allergies"]');
var allergyList = document.getElementById("allergies");

var mealSxn = document.getElementById("sgst-returned");
var mealVal = document.querySelector('input[id = "meal-amt"]');
var snackVal = document.querySelector('input[id = "snack-amt"]');
var mealBtn = document.getElementById("mealBtn");

//restriction radio button click
function restrictionDisplay() {
  if (document.getElementById("yesR").checked) {
    restrictionList.style.display = "block";
  } else {
    restrictionList.style.display = "none";
  }
}

restrictionBTN.forEach((radio) => {
  radio.addEventListener("click", restrictionDisplay);
});

//allergy radio button click
function allergyDisplay() {
  if (document.getElementById("yesA").checked) {
    allergyList.style.display = "block";
  } else {
    allergyList.style.display = "none";
  }
}

allergyBTN.forEach((radio) => {
  radio.addEventListener("click", allergyDisplay);
});

document.getElementById("activityNxBtn").onclick = function () {
  location.href = "activityForm.html";
};

function mealDisplay() {
  if (mealVal.value === "" || mealVal.value <= 0) {
    document.getElementById("meal-amt").focus();
  } else {
    mealSxn.style.display = "flex";
  }
}

mealBtn.addEventListener("click", mealDisplay);









var key =  "59b01a286ffd4fcfbef4d24209142500"
// "X-Api-Key": "59b01a286ffd4fcfbef4d24209142500"

function mealSearch() {
  $("#meal-suggestions").empty();
  // var val = $("#slider").slider("value");
  var queryURL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=" + key;
  {
  // "https://api.spoonacular.com/recipes/complexSearch&diet=vegetarian"

  fetch(queryURL, {
    headers: { "Content-Type": "application/json"}
    
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {


      console.log(data)
    })
  
  }}


mealBtn.addEventListener("click", mealSearch);

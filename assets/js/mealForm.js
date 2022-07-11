var restrictionBTN = document.querySelectorAll('input[name="restrictions"]');
var restrictionList = document.getElementById("restrictions");
var allergyBTN = document.querySelectorAll('input[name="allergies"]');
var allergyList = document.getElementById("allergies");

var mealSxn = document.getElementById("meal-suggestions");
var mealVal = document.querySelector('input[id = "meal-amt"]');
var snackVal = document.querySelector('input[id = "snack-amt"]');
var mealBtn = document.getElementById("mealBtn");
var activityBtn = document.getElementById("activityNxBtn")

var key = "343f56dbf5924e3a8fb4386adb0c682c";







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
  if (mealVal.value <= 0) {
    document.getElementById("meal-amt").focus();
  } else {
    mealSxn.style.display = "flex";
    activityBtn.style.display ="flex";
  }
}

mealBtn.addEventListener("click", mealDisplay);


function getAllergies() {
  var allergyParameters = ""
  var allergyChildren = allergyList.querySelectorAll("input")
  for (var i = 0; i < allergyChildren.length; i++) {
    var curElement = allergyChildren[i];
    // console.log(curElement.value)
    if (curElement.checked) {
      // console.log(curElement.checked)
      allergyParameters += curElement.value + ","
      }
    }
  return allergyParameters
}

function getDiets() {
  var dietParameters = ""
  var dietChildren = restrictionList.querySelectorAll("input")
  for (var i = 0; i < dietChildren.length; i++) {
    var curElement = dietChildren[i];
    // console.log(curElement.value)
    if (curElement.checked) {
      // console.log(curElement.checked)
      dietParameters += curElement.value
      console.log(dietParameters)
      }
    }
  return dietParameters
}



function mealSearch(getAllergies, getDiets) {
  $("#meal-suggestions").empty();
  var userInfo = JSON.parse(localStorage.getItem("localUser"))
  var dietCal = userInfo.dietCal
  
  console.log(userInfo)
  console.log(userInfo.dietCal)
  console.log(dietCal)
  console.log()
  var maxMealCal = (Math.round(dietCal/mealVal.value))

 console.log(maxMealCal)

  var queryURL =
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=" + key + "&intolerances=" + getAllergies + "&diet=" + getDiets;
  {
    fetch(queryURL, {
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  }
}

//meal handler, add in parameters/arguments for narrowing the search
function submitMealHandler() {
  mealSearch(getAllergies(), getDiets())
}

mealBtn.addEventListener("click", submitMealHandler);


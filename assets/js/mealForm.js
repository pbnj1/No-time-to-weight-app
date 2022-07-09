var restrictionBTN = document.querySelectorAll('input[name="restrictions"]');
var restrictionList = document.getElementById("restrictions");
var allergyBTN = document.querySelectorAll('input[name="allergies"]');
var allergyList = document.getElementById("allergies");





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




var mealSxn = document.getElementById("sgst-returned");
var mealVal = document.querySelector('input[id = "meal-amt"]');
var snackVal = document.querySelector('input[id = "snack-amt"]');


function exDisplay() {
    if (mealVal.value === "" || snackVal.value === "") {
      document.getElementById("meal-amt").focus();
      document.getElementById("snack-amt").focus();
      mealSxn.style.display = "none";
    } else {
      mealSxn.style.display = "flex";
    }
  }
  
  exBTN.addEventListener("click", exDisplay);
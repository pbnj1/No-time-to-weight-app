var restrictionBTN = document.querySelectorAll('input[name="restrictions"]');
var restrictionList = document.getElementById("restrictions");
var allergyBTN = document.querySelectorAll('input[name="allergies"]');
var allergyList = document.getElementById("allergies");

var mealSxn = document.getElementById("meal-suggestions");
var mealVal = document.querySelector('input[id = "meal-amt"]');
var snackVal = document.querySelector('input[id = "snack-amt"]');
var mealBtn = document.getElementById("mealBtn");
var activityBtn = document.getElementById("activityNxBtn")

var key = "cad842599f3d443fb979be703d616546";



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


function getCals(){
  var userInfo = JSON.parse(localStorage.getItem("localUser"))
  var dietCal = userInfo.dietCal
  var maxMealCal = (Math.round(dietCal/mealVal.value))
  
  return maxMealCal
}

function randomMeal(){
  var random = Math.floor(Math.random() * 10)+1
 
  return random;
}


function renderMeals(data) {
  // console.log(data.results[0].title)
  var suggestionBox = document.getElementById("meal-suggestions")
  suggestionBox.innerHTML = "";

  if (mealVal.value < 7) {
    for (var i = 0; i < mealVal.value; i++) {
      var recipe = data.results[i];
      //Create main div for all meal suggestions styling
      var div = document.createElement("div");
      div.classList.add("w-full", "h-48", "shadow-lg", "flex", "p-4")
      suggestionBox.appendChild(div);
  
  
      // Create two div boxes for styling the images and text seperately
      var divImg = document.createElement("div");
      divImg.classList.add("w-1/3", "h-48",)
      div.appendChild(divImg)
      var divContent = document.createElement("div");
      divContent.classList.add("w-2/3", "h-48",)
      div.appendChild(divContent)
  
  
      
      //create specific elements for img div and content div respectivly
      var img = document.createElement("img");
      var h1 = document.createElement("h1");
      var p = document.createElement("p");
  
      // assign pieces of content values
      h1.textContent = recipe.title;
      p.textContent = "Calories: " + data.results[i].nutrition.nutrients[0].amount + " kcal"
      img.src = recipe.image
  
      
      img.classList.add("w-36", "h-36", "rounded-lg")
      h1.classList.add("pl-4","pt-4", "text-lg", "font-bold", "header-font")
      p.classList.add("pl-4","pt-4", "body-font")
  
      divImg.appendChild(img);
      divContent.appendChild(h1);
      divContent.appendChild(p);
    }
  } else {
    for (var i = 0; i < 6; i++) {
      var recipe = data.results[i];
      //Create main div for all meal suggestions styling
      var div = document.createElement("div");
      div.classList.add("w-full", "h-48", "shadow-lg", "flex", "p-4")
      suggestionBox.appendChild(div);
  
  
      // Create two div boxes for styling the images and text seperately
      var divImg = document.createElement("div");
      divImg.classList.add("w-1/3", "h-48",)
      div.appendChild(divImg)
      var divContent = document.createElement("div");
      divContent.classList.add("w-2/3", "h-48",)
      div.appendChild(divContent)
  
  
      
      //create specific elements for img div and content div respectivly
      var img = document.createElement("img");
      var h1 = document.createElement("h1");
      var p = document.createElement("p");
  
      // assign pieces of content values
      h1.textContent = recipe.title;
      p.textContent = "Calories: " + data.results[i].nutrition.nutrients[0].amount + " kcal"
      img.src = recipe.image
  
      
      img.classList.add("w-36", "h-36", "rounded-lg")
      h1.classList.add("pl-4","pt-4", "text-lg", "font-bold", "header-font")
      p.classList.add("pl-4","pt-4", "body-font")
  
      divImg.appendChild(img);
      divContent.appendChild(h1);
      divContent.appendChild(p);
    }
  }
}


function mealSearch(getAllergies, getDiets, getCals, randomMeal) {
  $("#meal-suggestions").empty();
  

  var queryURL =
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=" + key + "&intolerances=" + getAllergies + "&diet=" + getDiets + "&maxCalories=" + getCals +"&offset=" + randomMeal;
  {
    fetch(queryURL, {
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        renderMeals(data)
      });
  }
}

//meal handler, add in parameters/arguments for narrowing the search
function submitMealHandler() {
  if (!localStorage.getItem('localUser')) {
    displayModalMeal();
  } else {
    mealSearch(getAllergies(), getDiets(), getCals(), randomMeal())
  }
}

function displayModalMeal() {
  document.getElementById('mealModalOverlay').classList.toggle('hidden');
  document.getElementById('mealModalOverlay').classList.toggle('flex');
}

document.getElementById('modalOkButton').onclick = function(){location.href = "userForm.html"}
mealBtn.addEventListener("click", submitMealHandler);


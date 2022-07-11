let userFormEl = document.getElementById('user-form');
let nameInput = document.getElementById('name');
let ageInput = document.getElementById('age');
let heightInput = document.getElementById('height');
let weightInput = document.getElementById('weight');
let genderInput = document.getElementById('gender');
let goalButtons = document.getElementsByName('fit_goal'); // is an array
let goalValEl = document.getElementById('goal-val');
let goalVal = document.createElement('input');
const kilogramPerPound = 0.453592;
const centimeterPerFoot = 30.48;


function addGoalValue() {
    for (let i = 0; i < goalButtons.length; i++) {
        if (goalButtons[i].checked && (goalButtons[i].value !== 'maintain')) {
            goalVal.setAttribute('placeholder', 'How many pounds?');
            goalVal.setAttribute('type', 'number');
            goalValEl.append(goalVal);
            goalVal.classList.remove('hidden');
            goalVal.value = '';
        } else if (goalButtons[i].checked && (goalButtons[i].value === 'maintain')) {
            goalVal.value = 0;
            goalVal.classList.add('hidden');
        }
    }
}

function updateUserObject(e){
    e.preventDefault();
    let userGoal = getUserGoal();

    userData.name = nameInput.value.trim();
    userData.gender = genderInput.value.trim();
    userData.weight = weightInput.value;
    userData.height = heightInput.value;
    userData.age = ageInput.value;
    userData.goal[0] = userGoal;
    userData.goal[1] = parseInt(goalVal.value);

    let userBMRInfo = getBMR();
    let dietCal = getDietCal(userBMRInfo);
    let exerciseCal = 300;
    let deficit = (userBMRInfo - dietCal) + exerciseCal;
    let goalTime = calcGoalTime(deficit);

    userData.BMR = userBMRInfo;
    userData.dietCal = dietCal;
    userData.exerciseCal = exerciseCal;
    userData.deficit = deficit;
    userData.goalTime = goalTime;

    commitToStorage();

    // clears input fields after data has been stored in user object on submit
    nameInput.value = '';
    genderInput.value = '';
    weightInput.value = '';
    heightInput.value = '';
    ageInput.value = '';
    goalVal.classList.add('hidden');
    for (let i = 0; i < goalButtons.length; i++) {
        goalButtons[i].checked = false;
    }
}

function getUserGoal() {
    for (let i = 0; i < goalButtons.length; i++) {
        if (goalButtons[i].checked) {
            return goalButtons[i].value;
        }
    }
}

// Uses the Revised Harris-Benedict Equation (is an estimate)
function getBMR() {
    let maleBMR = Math.round(88.362 + (13.397 * toKilograms(userData.weight)) + (4.799 * toCentimeters(userData.height)) - (5.677 * userData.age));
    let femaleBMR = Math.round(447.593 + (9.247 * toKilograms(userData.weight)) + (3.098 * toCentimeters(userData.height)) - (4.330 * userData.age));

    if (userData.gender === 'male') {
        return maleBMR;
    } else {
        return femaleBMR;
    }
}

// converts pounds to kilograms
function toKilograms(pounds) {
    let kilograms = pounds * kilogramPerPound;
    return kilograms;
}

// converts feet to centimeters
function toCentimeters(feet) {
    let centimeters = feet * centimeterPerFoot;
    return centimeters;
}

// returns a calorie count
function getDietCal(userBMR) {
    let dietCal;

    if (userData.goal[0] === 'lose') {
        dietCal = userBMR - 200;
        return dietCal;
    } else if (userData.goal[0] === 'gain') {
        dietCal = userBMR + 800;
        return dietCal;
    } else {
        dietCal = userBMR + 300;
        return dietCal;
    }
}

// calculates time it will take to achieve user's goal in units of months
function calcGoalTime(deficit) {
    if (userData.goal[0] === 'maintain') {
        return 0;
    } else {
        let totalCal = 3500 * userData.goal[1];
        let totalDays = totalCal / deficit;
        let totalWeeks = totalDays / 7;
        let totalMonths = totalWeeks / 4;
        return totalMonths;
    }
}

function commitToStorage() {
    localStorage.setItem('localUser', JSON.stringify(userData));
}

goalButtons.forEach(item => {
    item.addEventListener('click', addGoalValue);
})
userFormEl.addEventListener('submit', updateUserObject);
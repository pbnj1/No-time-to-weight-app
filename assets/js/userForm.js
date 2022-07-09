let userFormEl = document.getElementById('user-form');
let nameInput = document.getElementById('name');
let ageInput = document.getElementById('age');
let heightInput = document.getElementById('height');
let weightInput = document.getElementById('weight');
let genderInput = document.getElementById('gender');
let goalButtons = document.getElementsByName('fit_goal'); // is an array
let goalValEl = document.getElementById('goal-val');
let goalVal = document.createElement('input');


function addGoalValue() {
    for (let i = 0; i < goalButtons.length; i++) {
        if (goalButtons[i].checked && (goalButtons[i].value !== 'maintain')) {
            goalVal.setAttribute('placeholder', 'How many pounds?');
            goalVal.setAttribute('type', 'number');
            goalValEl.append(goalVal);
            goalVal.classList.remove('hidden');
            goalVal.value = '';
        } else if (goalButtons[i].checked && (goalButtons[i].value === 'maintain')) {
            goalVal.classList.add('hidden');
            goalVal.value = 0;
        }
    }
}

function updateUserObject(e){
    e.preventDefault();
    let userGoal = getUserGoal();

    userData.name = nameInput.value;
    userData.gender = genderInput.value;
    userData.weight = weightInput.value;
    userData.height = heightInput.value;
    userData.age = ageInput.value;
    userData.goal[0] = userGoal;
    userData.goal[1] = goalVal.value;
    console.log(userData);
}

function getUserGoal() {
    for (let i = 0; i < goalButtons.length; i++) {
        if (goalButtons[i].checked) {
            return goalButtons[i].value;
        }
    }
}

goalButtons.forEach(item => {
    item.addEventListener('click', addGoalValue);
})
userFormEl.addEventListener('submit', updateUserObject);
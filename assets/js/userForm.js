let userFormEl = document.getElementById('user-form');
let nameInput = document.getElementById('name');
let ageInput = document.getElementById('age');
let heightInput = document.getElementById('height');
let weightInput = document.getElementById('weight');
let genderInput = document.getElementById('gender');
let goalButtons = document.getElementsByName('fit_goal'); // is an array

function updateUserObject(e){
    e.preventDefault();
    let userGoal = getUserGoal();

    userData.gender = genderInput.value;
    userData.weight = weightInput.value;
    userData.height = heightInput.value;
    userData.age = ageInput.value;
    userData.goal[0] = userGoal;
}

function getUserGoal() {
    for (let i = 0; i < goalButtons.length; i++) {
        if (goalButtons[i].checked) {
            return goalButtons[i].value;
        }
    }
}

userFormEl.addEventListener('submit', updateUserObject);
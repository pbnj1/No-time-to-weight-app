document.getElementById("startBTN").onclick = function(){location.href = "userForm.html"}

function findUser() {
    let currentUser = 'localUser';
    
    if (localStorage.getItem(currentUser)) {
        document.getElementById('summary-page').classList.remove('hidden');
        populateSummary(currentUser);
    } else {
        document.getElementById('get-started').classList.remove('hidden');
    }
}

function populateSummary(user) {
    let userInfo = JSON.parse(localStorage.getItem(user));
    let retrievedUser = document.getElementById('retrieved-user');
    let userGoal = document.getElementById('goal');
    let userDietCal = document.getElementById('dietCal');
    let userExerciseCal = document.getElementById('exerciseCal');
    let userDeficit = document.getElementById('deficit');
    let userGoalTime = document.getElementById('goalTime');


    retrievedUser.textContent = userInfo.name;
    userGoal.textContent = userInfo.goal[0];
    userDietCal.textContent = userInfo.dietCal;
    userExerciseCal.textContent = userInfo.exerciseCal;
    userDeficit.textContent = userInfo.deficit;
    userGoalTime.textContent = userInfo.goalTime;

}

function updateUserInfo() {
    localStorage.clear();
    location.href = 'userForm.html';
}

document.addEventListener('DOMContentLoaded', findUser);
document.getElementById('update-info').addEventListener('click', updateUserInfo);
document.getElementById("startBTN").onclick = function(){location.href = "userForm.html"}

function findUser(e) {
    e.preventDefault();
    let currentUser = document.getElementById('retrieve-name').value;
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) === currentUser) {
            document.getElementById('retrieval-page').classList.add('z-0', 'hidden');
            document.getElementById('summary-page').classList.remove('hidden');
        } else {
            document.getElementById('retrieval-page').classList.add('z-0', 'hidden');
            document.getElementById('get-started').classList.remove('hidden');
        }
    }

    populateSummary(currentUser);
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

document.getElementById('user-retrieve').addEventListener('submit', findUser);
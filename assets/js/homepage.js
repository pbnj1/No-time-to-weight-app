document.getElementById("startBTN").onclick = function(){location.href = "userForm.html"}

function findUser(e) {
    e.preventDefault();

    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) === document.getElementById('retrieve-name').value) {
            console.log('match');
            document.getElementById('retrieval-page').classList.add('z-0', 'hidden');
            document.getElementById('summary-page').classList.remove('hidden');
        } else {
            document.getElementById('retrieval-page').classList.add('z-0', 'hidden');
            document.getElementById('get-started').classList.remove('hidden');
        }
    }
}

document.getElementById('user-retrieve').addEventListener('submit', findUser);
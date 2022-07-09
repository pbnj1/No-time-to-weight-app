let userData = {
    gender: '', // will be populated on submit of userform
    weight: null, // will be populated on submit of userform
    height: null, // will be populated on submit of userform
    age: null, // will be populated on submit of userform
    goal: ['', null], // will be populated on submit of userform
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  document.getElementById("startBTN").onclick = function(){location.href = "userForm.html"}
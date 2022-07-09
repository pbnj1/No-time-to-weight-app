var restrictionBTN = document.querySelectorAll('input[name="restrictions"]');
var restrictionList = document.getElementById("restrictions")

function restrictionDisplay(){
    if(document.getElementById("yesR").checked){
        restrictionList.style.display = "block";
    }else{
        restrictionList.style.display = "none"
    }
}

restrictionBTN.forEach(radio =>{
    radio.addEventListener("click", restrictionDisplay)
});


var allergyBTN = document.querySelectorAll('input[name="allergies"]')
var allergyList = document.getElementById("allergies")

function allergyDisplay(){
    if(document.getElementById("yesA").checked){
        allergyList.style.display = "block";
    }else{
        allergyList.style.display = "none"
    }
}

allergyBTN.forEach(radio =>{
    radio.addEventListener("click", allergyDisplay)
})
var allergyBTN = document.querySelectorAll('input[name="allergies"]');
var allergyList = document.getElementById("allergies")

function allergyDisplay(){
    if(document.getElementById("yes").checked){
        allergyList.style.display = "block";
    }else{
        allergyList.style.display = "none"
    }
}

allergyBTN.forEach(radio =>{
    radio.addEventListener("click", allergyDisplay)
});

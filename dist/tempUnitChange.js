
function tempUnitChange(){
    let unit = document.getElementById("togglePortion")
    if (unit.innerHTML == "Centigrade") {
        unit.innerHTML = "Fahrenheit";
    }
    else{
        unit.innerHTML = "Centigrade";
    }
}

export{tempUnitChange}

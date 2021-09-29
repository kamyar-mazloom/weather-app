function updateWeather(description,name,countryName,temp,feelslike,maxTemp,minTemp) {
    document.getElementById('description').innerHTML = description;
    document.getElementById('name').innerHTML = name;
    document.getElementById('name').innerHTML += ",";
    document.getElementById('name').innerHTML += countryName;    
    document.getElementById('feelsLike').innerHTML = "Feels like: ";
    document.getElementById('maxTemp').innerHTML = "Highest temp: ";
    document.getElementById('minTemp').innerHTML = "Lowest temp: ";

    if (document.getElementById("togglePortion").innerHTML == "Centigrade"){
        document.getElementById('feelsLike').innerHTML += Math.round(feelslike);
        document.getElementById('maxTemp').innerHTML += Math.round(maxTemp);
        document.getElementById('minTemp').innerHTML += Math.round(minTemp);
        document.getElementById('temp').innerHTML = Math.round(temp);
    }
    else{
        document.getElementById('feelsLike').innerHTML += Math.round((feelslike*9/5) + 32);
        document.getElementById('maxTemp').innerHTML += Math.round((maxTemp*9/5) + 32);
        document.getElementById('minTemp').innerHTML += Math.round((minTemp*9/5) + 32);
        document.getElementById('temp').innerHTML = Math.round((temp*9/5) + 32);
    }
    
}

export{updateWeather}
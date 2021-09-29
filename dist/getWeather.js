import{updateWeather} from './updateWeather.js'

function getWeather(city){

    let endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=28fe7b5f9a78838c639143fc517e4343`
  
    fetch(endPoint, {
    mode: 'cors'
})
.then(function(response) {
    if(response.ok !== true) {
        alert('City not found. Please choose another city')
    }
    else{
        return response.json();
    }
})
.then(function(response) {
let description = response.weather[0].description
let name = response.name 
let countryName = response.sys.country
let temp = response.main.temp
let feelslike = response.main.feels_like
let maxTemp = response.main.temp_max
let minTemp = response.main.temp_min

updateWeather(description,name,countryName,temp,feelslike,maxTemp,minTemp)

})

}

export{getWeather}





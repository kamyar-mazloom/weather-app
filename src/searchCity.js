import{getWeather} from '/src/getWeather.js'

function searchCity(city){
    if(document.getElementById("searchBar").value.length !==0){
        let city = document.getElementById("searchBar").value
        getWeather(city)
        document.getElementById("searchBar").value = ""
    }
}
export{searchCity}
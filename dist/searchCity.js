import{getWeather} from './getWeather.js'

function searchCity(){
    if(document.getElementById("searchBar").value.length !==0){
        let city = document.getElementById("searchBar").value
        getWeather(city)
        document.getElementById("searchBar").value = ""
    }
}
export{searchCity}
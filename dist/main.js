import{searchCity} from './searchCity.js'
import{tempUnitChange} from './tempUnitChange.js'

let searchBtn = document.getElementById("searchBtn")
searchBtn.addEventListener("click",searchCity)

let unit = document.getElementById("togglePortion")
unit.addEventListener("click",tempUnitChange)



import { weather_data } from './data.js';


let[ciudad1, ciudad2, ciudad3] = weather_data

let loadDayForecastData = (ciudad) => {
    let arregloCiudad;
    if(ciudad === ciudad1.city) arregloCiudad= ciudad1
    if(ciudad === ciudad2.city) arregloCiudad= ciudad2
    if(ciudad === ciudad3.city) arregloCiudad= ciudad3
    let ciudadsel= document.getElementById("city")
    ciudadsel.innerHTML= arregloCiudad.city
    let fecha= document.getElementById("date")
    fecha.innerHTML= arregloCiudad.date
    let maximatemp= document.getElementById("maxtemperature") 
    maximatemp.innerHTML= arregloCiudad.maxtemperature
    let mintemp= document.getElementById("mintemperature")
    mintemp.innerHTML= arregloCiudad.mintemperature
    let nubosidad= document.getElementById("cloudiness")
    nubosidad.innerHTML= arregloCiudad.cloudiness
    let wind= document.getElementById("wind")
    wind.innerHTML= arregloCiudad.wind
    let rainfall= document.getElementById("rainfall")
    rainfall.innerHTML= arregloCiudad.rainfall
    let late_icon= document.getElementById("late_icon")
    let metricashoy= arregloCiudad.forecast_today
    let [tarde, noche] = metricashoy
    late_icon.innerHTML= tarde.icon
    let late_temperature= document.getElementById("late_temperature")
    late_temperature.innerHTML= tarde.temperature
    let late_forecast= document.getElementById("late_forecast")
    late_forecast.innerHTML= tarde.forecast
    let late_text= document.getElementById("late_text")
    late_text.innerHTML= tarde.text
    let night_icon= document.getElementById("night_icon")
    night_icon.innerHTML= noche.icon
    let night_temperature= document.getElementById("night_temperature")
    night_temperature.innerHTML= noche.temperature
    let night_forecast= document.getElementById("night_forecast")
    night_forecast.innerHTML= noche.forecast
    let night_text= document.getElementById("night_text")
    night_text.innerHTML= noche.text
}

let loadWeekForecastData = (ciudad) => {
    
    let contador= 0
    let arregloCiudad;
    if(ciudad === ciudad1.city) arregloCiudad= ciudad1
    if(ciudad === ciudad2.city) arregloCiudad= ciudad2
    if(ciudad === ciudad3.city) arregloCiudad= ciudad3

    let forecast_week= arregloCiudad.forecast_week
    let lista= document.getElementsByClassName("list-group")
    lista[0].innerHTML= ""

    forecast_week.forEach((item) =>{
        document.getElementsByClassName("list-group")[0].innerHTML+= `
        <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
        <div class="d-flex flex-column">
          <h6 class="mb-1 text-dark font-weight-bold text-sm">${item.text}</h6>
          <span class="text-xs">${item.date}</span>
        </div>
        <div class="d-flex align-items-center ">
          <span class="font-weight-bold text-dark mx-2">${item.temperature.max}</span> |  <span class="text-dark mx-2">${item.temperature.min}</span>
          <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${item.icon}</i></div>
        </div>
      </li>
        `
        contador= contador+1
    })
    
}


let primerRender= (ciudad) =>{
    document.addEventListener("DOMContentLoaded", (event) => {
        loadDayForecastData(ciudad);
    });
    handleBtn(ciudad)
    
}

let cargarCiudades= () =>{
    let cuadro= document.getElementById("dropdownMenuButton")
    cuadro.innerHTML+= `<option class="dropdown-item" value="${ciudad2.city}">${ciudad2.city}</option>`
    cuadro.innerHTML+= `<option class="dropdown-item" value="${ciudad3.city}">${ciudad3.city}</option>`



    

}
let seleccionociudad= () =>{
    let cuadro= document.getElementById("dropdownMenuButton")
    cuadro.addEventListener('change', (event) => {
        //Código a ejecutar
        //El event contiene la información del elemento seleccionado
        let ciudad = event.target.value 
        loadDayForecastData(ciudad)
        handleBtn(ciudad)
        //Vacio informacion cargada semanal
        let lista= document.getElementsByClassName("list-group")
        lista[0].innerHTML= ""

    });
}

let handleBtn= (ciudad) =>{
    let cargar= document.getElementById("loadinfo")
    cargar.addEventListener('click', (event) =>{
        loadWeekForecastData(ciudad)
    } )  
}

primerRender("Guayaquil");
cargarCiudades()
seleccionociudad()
let apiKey = "604b4340cde5f1de5b023b2999741f90";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
     let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
     let data = await response.json();

     console.log(data);

     document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
     document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

     if (data.weather[0].main == "Clouds") {
          weatherIcon.src = "./clouds.png"
     }
     else if (data.weather[0].main == "Clear") {
          weatherIcon.src = "./clear.png"
     }
     else if (data.weather[0].main == "Rain") {
          weatherIcon.src = "./rain.png"
     }
     else if (data.weather[0].main == "Drizzle") {
          weatherIcon.src = "./drizzle.png"
     }
     else if (data.weather[0].main == "Mist") {
          weatherIcon.src = "./mist.png"
     }
     else if (data.weather[0].main == "Snow") {
          weatherIcon.src = "./snow.png"
     }

}

searchBtn.addEventListener("click", () => {
     checkWeather(searchBox.value)
})
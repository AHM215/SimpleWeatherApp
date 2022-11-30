let weather = {
  apiKey:"36130cee32e03facd0d670804c9710bd",
  fetchWeather:function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="
    + city
    + "&appid="
    + this.apiKey
  )
    .then((response)=>response.json())
  .then((data)=>this.displayWeather(data))},
  displayWeather:function (data) {
    const{name}=data;
    const{description}=data.weather[0];
    const{temp,humidity}=data.main;
    const{speed}=data.wind;
    document.querySelector(".city").innerText= "Weather in " + name ;
    document.querySelector(".temp").innerText= temp ;
    document.querySelector(".description").innerText= description ;
    document.querySelector(".humidity").innerText= "Humidity: " + humidity +"%" ;
    document.querySelector(".wind").innerText= "Wind speed: " + speed ;
    document.querySelector(".weather").classList.remove("loading");
  },
  search:function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
};
document.querySelector(".search button").addEventListener("click",function (){
  weather.search();
} )
document.querySelector(".search-bar").addEventListener("keyup",function (){
  if (event.key=="Enter") {
    weather.search();
  }

} )

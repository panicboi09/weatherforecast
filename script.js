const apiKey = "0c125a44cce04e81b3b163622252306";
const baseUrl = "https://api.weatherapi.com/v1/forecast.json?";
const searchBox = document.querySelector("#city-input");
const searchbtn = document.querySelector("#city-input-btn");
const icon = document.querySelector("#weather-icon");

async function weatherCheck (city) {
    const response = await fetch(baseUrl + `key=${apiKey}` + `&q=${city}`);
    var dataFetched = await response.json();
    document.querySelector("#city-name").innerHTML = dataFetched.location.name;
    document.querySelector("#temperature").innerHTML = dataFetched.current.temp_c + "℃";
    document.querySelector("#description").innerHTML = dataFetched.current.condition.text;
    document.querySelector("#wind-speed").innerHTML = dataFetched.current.wind_kph + "Kmph";
    if(dataFetched.current.condition.text == "Rainy") {
        icon.src = "./10087.jpg";
    }
 else if (dataFetched.current.condition.text == "Light rain") {
icon.src = "./10087.jpg";
 }
else if (dataFetched.current.condition.text == "Patchy rain nearby") {
icon.src = "./10087.jpg";
 } else if (dataFetched.current.condition.text == "Sunny") {
icon.src = "./sunny.jpg";
 }
 else if (dataFetched.current.condition.text == "Mist") {
icon.src = "./mist.jpg";
 }
else if (dataFetched.current.condition.text == "Moderate or heavy rain with thunder" || dataFetched.current.condition.text == "Heavy rain") {
icon.src = "./10087.jpg";
 }
else if (dataFetched.current.condition.text == "Light rain shower") {
icon.src = "./10087.jpg";
 }
 else if (dataFetched.current.condition.text == "Clear") {
icon.src = "./clear.jpg";
 }
 else if (dataFetched.current.condition.text == "Cloudy" || dataFetched.current.condition.text == "Partly Cloudy") {
icon.src = "./cloudy.jpg";
 }
 else if (dataFetched.current.condition.text == "Clear") {
icon.src = "./clear.jpg";
 }
 else if (dataFetched.current.condition.text == "Patchy light drizzle") {
icon.src = "./10087.jpg";
 }else if (dataFetched.current.condition.text == "Snow" || dataFetched.current.condition.text == "Heavy Snow" || dataFetched.current.condition.text == "Partly Snowy") {
icon.src = "./snow.jpg";
 }
document.querySelector("#weather-info").style.display = "block";
}
searchbtn.addEventListener("click",() => {
    weatherCheck(searchBox.value);
})
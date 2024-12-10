
const apiKey = "dd5c93849f0cb8606120dbc584eb673c";

function Update(data){
    const temperature = Math.round(data.main.temp) + " °F";
    const tempMax = Math.round(data.main.temp_max) + " °F";
    const tempMin= Math.round(data.main.temp_min) + " °F";
    const location = data.name;
    const humidity = data.main.humidity;
    const weather = data.weather[0].description;
    const weatherIcon = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
     document.getElementById("temperature").innerText = temperature;
     document.getElementById("weather").innerText = weather
     document.getElementById('location').innerText = location;
     document.getElementById('humidity').innerText = humidity;
     document.getElementById('temp-max').innerText = tempMax;
     document.getElementById('temp-min').innerText = tempMin;
     document.getElementById("icon").src = iconUrl;
     document.getElementById("city-input").value = "";
     document.querySelector('.current-weather').style.display = 'block'; 
     document.querySelector('.forecast').style.display = 'flex';
 }


function GetWeather(){
   const search = document.getElementById("city-input").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=imperial`;

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
     return response.json();
    })
    .then(data =>{
        Update(data);
        console.log(data)
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    }); 
    
}
document.getElementById("search-button").addEventListener('click',GetWeather);




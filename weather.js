async function findWeather(city){
    const link =config.url + city + config.api;
    const outcomeJson = await fetch(link);
    const outcome = await outcomeJson.json();
    console.log(outcome);
    console.log(outcome.days[0].datetime);
    return outcome;
}
function getOutcome(outcome){
    if(outcome === null){
        console.log("There is nothing");
        return ;
    }
    else{
        return{ 
            Date:outcome.days[0].datetime,
            temprature:outcome.days[0].temp,
            feelsLike:outcome.days[0].feelslike,
            humid:outcome.days[0].humidity,
            conditions:outcome.currentConditions.conditions,
            precipitation:outcome.precip,
            precipitationChance:outcome.currentConditions.precipprob,
            windSpeed:outcome.currentConditions.windspeed,
            WeatherIcon:outcome.currentConditions.icon,
        };
    }
}
function aegisRecommendation(temp, condition) {
    const stat = condition.toLowerCase(); 
    if (temp < 32){
        if (stat.includes('snow')){
            return `Outfit Recommendation: Waterproof parka and insulated boots.
                    Activity: Indoor strength training`;
        }
        return `Outfit Recommendation: Heavy parka and thermal base.
                Activity: Winter photography`;
    } 
    else if (temp >= 32 && temp < 50){
        if (stat.includes('rain')){
            return `Outfit Recommendation: Waterproof trench coat and umbrella.
                    Activity: Visiting a gallery`;
        }
        return `Outfit Recommendation: Puffer jacket and light scarf.
                 Activity: Brisk morning jog`;
    }
    else if (temp >= 51 && temp < 68){
        if (stat.includes('rain')){
            return `Outfit Recommendation: Windbreaker and jeans.
                    Activity: Indoor climbing gym`;
        }
        return `Outfit Recommendation: Light sweater or denim jacket.
                Activity: Afternoon bike ride`;
    }
    else if (temp >= 68 && temp < 80){
        if (stat.includes('rain') || stat.includes('storm')){
            return `Outfit Recommendation: Breathable rain shell.
                    Activity: Indoor basketball`;
        }
        return `Outfit Recommendation: T-shirt and sunglasses.
                Activity: Hike in the woods`;
    }
    else if (temp >= 80){
        if (stat.includes('rain') || stat.includes('humid')){
            return `Outfit Recommendation: Moisture wicking activewear.
                    Activity: Air conditioned gym`;
        }
        return `Outfit Recommendation: Linen shirt and sunscreen.
                Activity: Beach trip or swimming`;
    }
    return `Outfit Recommendation: Standard seasonal attire.     
            Activity: Explore your local surroundings`;
}
const button = document.querySelector('#searchButton');
const input = document.querySelector('#locationInput');
async function change(){
    const location = document.querySelector('#locationInput').value;
    const liveWeather = await findWeather(location);
    const outcome = getOutcome(liveWeather);
    if(outcome){
    const info = document.querySelector('.weatherInfo');
    info.innerHTML='<div class="weather-info-container"> <h2>Today\'s Weather</h2><div class="forecast-item">    <span class="weather-label">Date:</span> <span class="weather-value">'+ outcome.Date+ '</span> </div> <div class="forecast-item">   <span class="weather-label">Temperature:</span>    <span class="weather-value">'+outcome.temprature+'℉</span> </div> <div class="weather-image" id="weatherImage"></div> </div>';
    const forecast = document.querySelector('.forecast');
    forecast.innerHTML='<h3>Weather Details</h3> <div class="forecast-item">  <span class="weather-label">Humidity:</span>  <span class="weather-value">'+ outcome.humid+ '%</span>  </div>  <div class="forecast-item">    <span class="weather-label">Feels Like:</span>    <span class="weather-value">'+ outcome.feelsLike +'°F</span> </div> <div class="forecast-item">    <span class="weather-label">Wind Speed:</span>    <span class="weather-value">' + outcome.windSpeed +'mph</span>   </div>    <div class="forecast-item">    <span class="weather-label">Conditions:</span>    <span class="weather-value">'+ outcome.conditions +'</span> </div> ';
        if(outcome.WeatherIcon.includes('snow')){
            info.innerHTML +="<img src='https://i.pinimg.com/736x/98/80/d4/9880d4a3b244b691ba115efdce111744.jpg' alt='snow picture' width= '100px' height='90px'> ";
        }
        else if(outcome.WeatherIcon.includes('clear-day')){
            info.innerHTML +="<img src='https://i.pinimg.com/736x/ca/d4/51/cad451790c7b4af60f6c66582a08895c.jpg' alt='sunny' width= '100px' height='90px'> ";
        }
        else if(outcome.WeatherIcon.includes('rain')){
            info.innerHTML +="<img src='https://i.pinimg.com/736x/c3/13/26/c313261be7430f91a05277dde7f30acc.jpg' alt = 'rain' width= '100px' height='90px'> ";
        }
        else if(outcome.WeatherIcon.includes('wind')){
            info.innerHTML +="<img src='https://i.pinimg.com/1200x/be/d7/ae/bed7ae968591ba884635664c884b6ba1.jpg' alt='wind weather' width= '100px' height='90px' >";
        }
        else if(outcome.WeatherIcon.includes('partly-cloudy-day')){
            info.innerHTML +="<img src='https://i.pinimg.com/736x/e5/ed/37/e5ed371c5a80df6edee3cf442c7f3d28.jpg' alt='cloudy weather' width= '100px' height='90px'>";
        }
        else if(outcome.WeatherIcon.includes('partly-cloudy-night')){
            info.innerHTML +="<img src='https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-clouds-night-icon.png' alt='Cloudy night' width='100px' height='90px'> ";
        }
        else{
            console.log('other weather');
            info.innerHTML+="<img src='https://i.pinimg.com/1200x/6f/2d/d3/6f2dd38c42c94785f87cab82ec0b53f5.jpg' alt='defualt weather' width= '100px' height='90px' style='border-radius: 8px;'> ";
        }
const suggestion = aegisRecommendation(outcome.feelsLike, outcome.conditions);
const message = document.querySelector("#suggestionText");
message.innerHTML= "<h4>Suggestions</h4>"+ suggestion;
}
else{
    console.log("Error");
}
}

button.addEventListener('click', function(e){
e.preventDefault();
change();
});
input.addEventListener('keydown', function(e){
    if(e.key === "Enter"){
        e.preventDefault();
        change();
    }
    
});

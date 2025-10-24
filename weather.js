async function findWeather(city){
    const link =' https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + city+ '?key=VGL5YU8X29WFANELBLGESVR8V';
    const outcomeJson = await fetch(link);
    const outcome = await outcomeJson.json();
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
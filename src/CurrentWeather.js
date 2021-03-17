import React from 'react'

const CurrentWeather = ({weather}) => {
    const cityData = (weather.data!=undefined)? 
    <div className="weatherData">
        <p>City: {weather.data.name}, {weather.data.sys.country}</p>
        <p>Temp: {weather.data.main.temp}</p>
        <p>Humidity: {weather.data.main.humidity}</p>
        <p>Current weather: {weather.data.weather[0].description}</p>
        </div> :"No Data"
    
    return (
        <div>
                {cityData}
        </div>
        )
}

export default CurrentWeather

import React from 'react'

const ForecastWeather = ({forecast}) => {
    const forecastData = (forecast.data!=undefined)? 
    // console.log(forecast.data.list[0].dt_txt)
    forecast.data.list.map((weatherItem ,i)=>{
        return(
        <p  className="extendedWeather" key={i}> &gt;&gt; Date: {weatherItem.dt_txt}, {weatherItem.weather[0].description}, 
        Temp: {weatherItem.main.temp}<span>&deg;C</span>, Humidity: {weatherItem.main.humidity}%</p>
        )
    })
     :" "

    return (
        <div>
            {forecastData}
        </div>
    )
}

export default ForecastWeather

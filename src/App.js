import React, {useState, useEffect} from 'react';
import axios from "axios";
import SearchBar from './SearchBar';
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from './ForecastWeather';

const App  = () => {
  const [weather, setWeather] = useState([])
  const [fivedays, setFivedays] = useState([])

    const onSearchSubmitted = async (term)=>{
        // console.log(term)
        const APIkey="b857d03a99c79abd8612f7738bf68da0"
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${term}&appid=${APIkey}`);
            const fiveResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${term}&appid=${APIkey}`)
            console.log( response)
            console.log(fiveResponse)
            setWeather(response)
            setFivedays(fiveResponse)
        }
        catch(err){
            console.log(err)
        }
      }  
  
  
    return (
      <div>
        <p>Retro React Weather</p>
        <SearchBar onSearchSubmitted={onSearchSubmitted}/>
        <CurrentWeather weather={weather} />
        <br/>
        <ForecastWeather forecast={fivedays}/>
      </div>
    )
  }
  
export default App

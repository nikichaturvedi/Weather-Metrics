import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './infoBox';


export default function WeatherApp(){

    const[weatherInfo, setWeatherInfo ] = useState({
        city:"Delhi",
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.75,
        feelslike: 24.84,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    };

    return(
        <div style={{textAlign: "center"}}>
            <h1>Weather Metrics</h1>
            <br></br>
            <SearchBox updateInfo= {updateInfo}></SearchBox>
            <br></br>
            <InfoBox info= {weatherInfo}></InfoBox>
        </div>
    );
}
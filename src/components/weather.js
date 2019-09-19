import React, { useState, useEffect } from 'react'
import Loader from '../assets/loaders/loader.svg';

function Weather () {

    const[currWeather, setWeather] = useState( 
        { lat: undefined, lon: undefined, city: undefined,
        temperatureC: undefined, humidity: undefined, pressure: undefined,
        sunrise: undefined,sunset: undefined, errorMessage: undefined});
    
    const getPosition = () => {
        return new Promise(function(resolve, reject){
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }
    const getWEather = async(latitude, longitude) => {
        const apikey = "acc338977c6a27651fc85a8974fdca14";
        const api_call = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`);
        const data = await api_call.json();
        console.log('DATA',data);
        setWeather({
            lat: latitude,
            lon: longitude,
            city: data.name,
            temperatureC: Math.round(data.main.temp),
            icon: data.weather[0].icon,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            weather: data.weather[0].description,
            sunrise: '',
            sunset: ''
        })
        console.log('hook', currWeather);
    }

    useEffect(() => {
        getPosition()
        .then((position) => {

            getWEather(position.coords.latitude, position.coords.longitude)
            console.log(position.coords.longitude, position.coords.latitude);

        }).catch((err) => {
            setWeather({...currWeather, errorMessage: err.message});
        })
    },[]);
    
    const {city, temperatureC, pressure, weather, humidity, icon, errorMessage} = currWeather;
    if(city){
        return (
            <div>
                <div className="current-weather">
                    <img alt="" src={`http://openweathermap.org/img/wn/${icon}.png`} />
                    <h3>{weather}</h3>
                    <h1 className="h-large">{temperatureC}°C</h1>
                    <p>Current location: <span> {city}</span></p>
                    <p>Pressure: <span>{pressure} mbar</span></p>
                    <p>Humidity: <span>{humidity}%</span></p>
                </div>
            </div>
        )
    } else{
        return <div><img alt="" src={Loader} /></div>
    } 
}

export default Weather;

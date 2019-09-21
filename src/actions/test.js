export const searchResult = (data) => {
    return{
        type: 'SEARCH_RESULT',
        payload: {
            lat: data.coord.lat,
            lon: data.coord.lon,
            name: data.name,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            temp: Math.round(data.main.temp),
            tempMax: Math.round(data.main.temp_max),
            tempMin: Math.round(data.main.temp_min),
            weatherDesc: data.weather[0].description,
            weatherMain: data.weather[0].main,
            icon: data.weather[0].icon
        }
        

    };
};
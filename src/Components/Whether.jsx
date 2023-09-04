import React,{useState} from 'react'
import rain_icon from '../images/rain.png'
import drizzle_icon from '../images/drizzle.png'
import snow_icon from '../images/snow.png'
import wind_icon from '../images/wind.png'
import humidity_icon from '../images/humidity.png'
import search_icon from '../images/search.png'
import cloud_icon from '../images/cloud.png'
import clear_icon from '../images/clear.png'
import './whether.css'

const Whether = () => {

    const [wicon, setWicon] = useState(cloud_icon);

    let api_key = "5f7b8f2599d728ca2959e9442210ddc5";
    const  searchFun = async() =>
    {
       const element = document.getElementsByClassName('cityInput');

       if(element[0].value === "")
       {
        return 0
       }

       let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    //    console.log()

    let response = await fetch(url);
    let data = await response.json();
    console.log(data)

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-percent");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = Math.floor(data.wind.speed) + "km/h";
    temperature[0].innerHTML = Math.floor(data.main.temp) + "°C";
    location[0].innerHTML = data.name;

    if (data.weather[0].icon === "01d" || data.weather[0].icon === '01n')
    {
        setWicon(clear_icon);
    }
    else if (data.weather[0].icon === "02d" || data.weather[0].icon === '02n')
    {
        setWicon(cloud_icon);
    }
    else if (data.weather[0].icon === "03d" || data.weather[0].icon === '03n')
    {
        setWicon(drizzle_icon);
    }
    else if (data.weather[0].icon === "04d" || data.weather[0].icon === '04n')
    {
        setWicon(drizzle_icon);
    }
    else if (data.weather[0].icon === "09d" || data.weather[0].icon === '09n')
    {
        setWicon(rain_icon);
    }
    else if (data.weather[0].icon === "10d" || data.weather[0].icon === '10n')
    {
        setWicon(rain_icon);
    }
    else if (data.weather[0].icon === "13d" || data.weather[0].icon === '13n')
    {
        setWicon(snow_icon);
    }
    else
    {
        setWicon(clear_icon);
    }
    







    }


  return (
    <div className='container'>
        <div className='top-bar'>
            <input type='text' className='cityInput' placeholder='Enter your city!' />

            <div className='search-icon ' onClick={() =>{searchFun()}}>
                <img src={search_icon} alt='' />
            </div>
        </div>


        <div className='weather-image'>
            <img src={wicon} alt=''/>

        </div>
        <div className='weather-temp'> 24°C </div>
        <div className='weather-location'> Mogadishu</div>

        <div className='data-container'>
            <div className='element'>
                <img src={humidity_icon}alt='' className='icon' />

                <div className='data'>
                    <div className='humidity-percent'> 64% </div>
                    <div className='text'> Humidity</div>

                </div>

            </div>


            <div className='element'>
                <img src={wind_icon}alt='' className='icon' />

                <div className='data'>
                    <div className='wind-percent'> 18 km/h</div>
                    <div className='text'> Wind speed</div>

                </div>

            </div>

        </div>
    
      
    </div>
  )
}

export default Whether

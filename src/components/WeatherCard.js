import React from 'react'
import './weathercard.css'
import { FaMapMarkerAlt } from 'react-icons/fa'
import WeatherInfo from './WeatherInfo'
import Loader from './Loader'
import axios from 'axios'
import { useEffect, useState } from "react"


export default function WeatherCard(){

   const [latitude, setLat] = useState([]);
   const [longitude, setLong] = useState([]);
   const [temperature, setTemperature] = useState(null);
   const [city, setCity] = useState('');
   const [humidity, setHumidity] = useState(null);
   const [windspeed, setWindspeed] = useState(null);
   const [weatherdesc, setWeatherdesc] = useState(null);
   const [icon, setIcon] = useState('');
   const [loading, setLoading] = useState(true)
  

  useEffect(() => {

    setTimeout(() => setLoading(false), 6000)

    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    axios.get(`${process.env.REACT_APP_API_URL}/weather/?lat=${latitude}&lon=${longitude}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
      .then((res) => {
        setTemperature(res.data.main.temp);
        setCity(res.data.name);
        setHumidity(res.data.main.humidity)
        setWindspeed(res.data.wind.speed)
        setWeatherdesc(res.data.weather[0].description)
        setIcon(res.data.weather[0].icon)
        console.log(res)
      }).catch(err => {
        console.log("error", err)
      })

  }, [latitude, longitude])



  return (

    <div className="wrapper">
       
        <div className="container weather-body">
          <div className="weather-header">
            <h3>Local Weather Report  <FaMapMarkerAlt /></h3>
          </div>

          {loading === false ? (
            <WeatherInfo 
            latitude={latitude}
            longitude={longitude}
            temperature={temperature}
            city={city}
            humidity={humidity}
            windspeed={windspeed}
            weatherdesc={weatherdesc}
            icon={icon}
             
            />
          ): (
          <Loader />
      )}
          
            
        </div>
        <div className="container ">
          <div className="weather-footer">
            <p>Made by Jona Reyes</p>
          </div>
        </div>
      </div>
  )
}
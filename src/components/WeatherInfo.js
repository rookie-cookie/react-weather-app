import React from 'react'
import './weatherinfo.css'
import moment from 'moment'


export default function WeatherInfo({
  temperature,
  city, 
  humidity,
  windspeed,
  weatherdesc,
  icon
  }) {

  return (
    <div>
      <p>city: {city}</p>
      <p>temperature: {temperature}</p>
      <p>humidity: {humidity} %</p> 
      <p>windspeed: {windspeed} m/s</p>
      <p>description: {weatherdesc} </p>
      <p>day: {moment().format('dddd')} </p>
      <p>date: {moment().format('LL')}</p>
      <p>time: {moment().format('h:mm a')}</p>
      <p>icon: {icon} </p>

    </div>
  )

}
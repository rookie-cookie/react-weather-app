import React from 'react'
import './weatherinfo.css'
import moment from 'moment'
import WeatherIcon from './WeatherIcon'



export default function WeatherInfo({
  temperature,
  city, 
  humidity,
  windspeed,
  weatherdesc,
  icon
  }) {



  return (
    <div className="weatherinfo-container">
      <div className="row desc">
        <div className="col-sm-3 displayicon">
           <WeatherIcon icon={icon} />
        </div>
        <div className="col-sm-9">
          <p className="displaylocation">{city}</p>
          <p className="displaydate">{moment().format('dddd')}, {moment().format('LL')} </p>
          <p className="displaydesc">{weatherdesc} - {moment().format('h:mm a')}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-10">
          <div className="displaytemp"> {Math.floor(temperature)}&deg;F</div>
        </div>
        <div className="col-sm-2">
          <div className="buttons convertC">C</div>
          <div className="buttons convertF">F</div>
        
        </div>
      </div>
      
     <div className="row">
       <p className="displayhumidity">humidity: {humidity} %</p> 
     </div>
     <div className="row">
        <p className="displaywind" >windspeed: {windspeed} m/s</p>
     </div>

    </div>
  )

}
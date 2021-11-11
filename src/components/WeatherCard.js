import React from 'react'
import './weathercard.css'
import { FaMapMarkerAlt } from 'react-icons/fa'


export default function weathercard(){

  return (
    <div className="wrapper">
        <div className="container weather-body">
          <div className="weather-header">
            <h3>Weather Report  <FaMapMarkerAlt /></h3>
          </div>
          {/* <Weather /> */}
       
        </div>
        <div className="container ">
          <div className="weather-footer">
            <p>Made by Jona Reyes</p>
          </div>
        </div>
      </div>
  )
}
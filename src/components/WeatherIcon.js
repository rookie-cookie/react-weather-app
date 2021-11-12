import React from 'react'
import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudyHigh,
  WiCloudy,
  WiNightCloudy,
  WiDayFog,
  WiNightFog,
  WiDayRainMix,
  WiNightAltRainMix,
  WiDayRain,
  WiNightAltRain,
  WiDayThunderstorm, 
  WiNightAltStormShowers,
  WiDaySnow,
  WiNightSnow,
  WiWindy
} from 'weather-icons-react'


export default function WeatherIcon({icon}) {

  let weatherIcons = null;

  if (icon === '01d') {
    weatherIcons = <WiDaySunny size={100} color='#555' />
  } else if (icon === '01n') {
    weatherIcons = <WiNightClear size={100} color='#555' />
  } else if (icon === '02d') {
    weatherIcons = <WiDayCloudy size={100} color='#555' />
  } else if (icon === '02n') {
    weatherIcons = <WiNightAltCloudyHigh size={100} color='#555' />
  } else if (icon === '03d'){
    weatherIcons = <WiCloudy size={100} color='#555' />
  } else if (icon === '03n'){
    weatherIcons = <WiNightCloudy size={100} color='#555' />
  }  else if (icon === '04d'){
    weatherIcons = <WiDayFog size={100} color='#555' />
  } else if (icon === '04n'){
    weatherIcons = <WiNightFog size={100} color='#555' />
  } else if (icon === '09d') {
    weatherIcons = <WiDayRainMix size={100} color='#555' />
  } else if (icon === '09n') {
    weatherIcons = <WiNightAltRainMix size={100} color='#555' />
  } else if (icon === '10d') {
    weatherIcons = <WiDayRain size={100} color='#555' />
  } else if (icon === '10n') {
    weatherIcons = <WiNightAltRain size={100} color='#555' />
  } else if (icon === '11d') {
    weatherIcons = <WiDayThunderstorm size={100} color='#555' />
  } else if (icon === '11n') {
    weatherIcons = <WiNightAltStormShowers size={100} color='#555' />
  } else if (icon === '13d') {
    weatherIcons = <WiDaySnow size={100} color='#555' />
  } else if (icon === '13n') {
    weatherIcons = <WiNightSnow size={100} color='#555' />
  } else if (icon === '50d') {
    weatherIcons = <WiWindy size={100} color='#555' />
  } else if (icon === '50n') {
    weatherIcons = <WiWindy size={100} color='#555' />
  }
  
  return (
    <div>
      {weatherIcons}
    </div>
  )   
}
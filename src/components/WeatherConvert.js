import React from 'react'

export default function Convert({temperature}){
  
  function convertC(){
    let tempc = Math.floor((temperature - 32) * 0.5556);
    document.querySelector('.displaytemp').innerHTML = `${tempc}&deg;C`;
  }

  function convertF() {
    let tempf = Math.floor(temperature);
    document.querySelector('.displaytemp').innerHTML = `${tempf}&deg;F`;
  }

  return (
    <div>
      <div className="buttons convertC" onClick={convertC}>C</div>
      <div className="buttons convertF" onClick={convertF}>F</div>
    </div>
  )
}
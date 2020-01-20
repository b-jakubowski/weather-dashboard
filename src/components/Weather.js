import React from 'react'
import SunriseSunset from './SunriseSunset'
import TempHumidityPressure from './TempHumidityPressure'
import City from './City';

const Weather = ({ city, coord, temp, humidity, pressure, sun }) => {
  return (
    <div>
      <City name={city} coord={coord} />
      <TempHumidityPressure
        temp={temp}
        humidity={humidity}
        pressure={pressure}
      />
      <SunriseSunset sunrise={sun.sunrise} sunset={sun.sunset} />
    </div>
  )
}

export default Weather

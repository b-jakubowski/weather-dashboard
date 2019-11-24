import React from 'react'
import dayjs from 'dayjs'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowDown,
  faMoon,
  faSun,
  faTint
} from '@fortawesome/free-solid-svg-icons'

const Weather = props => {
  const { temp, humidity, pressure, sun } = props

  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `

  const Temperature = styled.h3`
    font-size: 4rem;
    padding: 0.5rem;
    font-weight: normal;
    margin: 0.5rem 1rem;
    color: rgba(255, 255, 255, 0.9);
  `

  const HumidityPressure = styled.div`
    display: flex;
    flex-direction: column;
    color: rgba(255, 255, 255, 0.9);
  `

  const WeatherDetails = styled.p`
    margin: 0 0.5rem 0 0;
    padding: 0.2rem;
    color: rgba(255, 255, 255, 0.9);
  `

  const SunriseSunset = styled.div`
    display: flex;
    justify-content: center;
  `

  const Icon = styled(FontAwesomeIcon)`
    margin-right: 0.5rem;
  `

  return (
    <div>
      <Container>
        <Temperature>{Math.round(temp * 10) / 10}°C</Temperature>
        <HumidityPressure>
          <WeatherDetails>
            <Icon icon={faTint} />
            Humidity: {humidity} %
          </WeatherDetails>
          <WeatherDetails>
            <Icon icon={faArrowDown} />
            Pressure: {pressure} hPa
          </WeatherDetails>
        </HumidityPressure>
      </Container>
      <SunriseSunset>
        <WeatherDetails>
          <Icon icon={faSun} style={{ color: 'rgba(254,95,0, 0.8)' }} />
          Sunrise: {dayjs.unix(sun.sunrise).format('HH:mm')}
        </WeatherDetails>
        <WeatherDetails>
          <Icon icon={faMoon} />
          Sunset: {dayjs.unix(sun.sunset).format('HH:mm')}
        </WeatherDetails>
      </SunriseSunset>
    </div>
  )
}

export default Weather

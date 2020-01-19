import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faTint } from '@fortawesome/free-solid-svg-icons'
import SunriseSunset from './SunriseSunset'

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

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`

const Weather = props => {
  const { temp, humidity, pressure, sun } = props

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
      <SunriseSunset sunrise={sun.sunrise} sunset={sun.sunset} />
    </div>
  )
}

export default Weather

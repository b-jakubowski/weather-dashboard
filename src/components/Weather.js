import React from 'react'
import styled from '@emotion/styled'
import SunriseSunset from './SunriseSunset'
import TempHumidityPressure from './TempHumidityPressure'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Weather = props => {
  const { temp, humidity, pressure, sun } = props

  return (
    <div>
      <Container>
        <TempHumidityPressure
          temp={temp}
          humidity={humidity}
          pressure={pressure}
        />
      </Container>
      <SunriseSunset sunrise={sun.sunrise} sunset={sun.sunset} />
    </div>
  )
}

export default Weather

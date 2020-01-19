import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import dayjs from 'dayjs'
import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const WeatherDetails = styled.p`
  margin: 0 0.5rem 0 0;
  padding: 0.2rem;
  color: rgba(255, 255, 255, 0.9);
`

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`

const SunriseSunset = ({ sunrise, sunset }) => {
  return (
    <Container>
      <WeatherDetails>
        <Icon icon={faSun} style={{ color: 'rgba(254,95,0, 0.8)' }} />
        Sunrise: {dayjs.unix(sunrise).format('HH:mm')}
      </WeatherDetails>
      <WeatherDetails>
        <Icon icon={faMoon} />
        Sunset: {dayjs.unix(sunset).format('HH:mm')}
      </WeatherDetails>
    </Container>
  )
}

export default SunriseSunset

import React, { useState } from 'react'
import styled from '@emotion/styled'
import City from '../components/City'
import Weather from '../components/Weather'
import Search from '../components/Search'
import Forecast from '../components/Forecast'
import useWeather from '../hooks/useWeather'

const Container = styled.div`
  background-image: radial-gradient(
    circle farthest-corner at 84.6% 77.8%,
    rgba(86, 89, 218, 1) 0%,
    rgba(95, 208, 248, 1) 90%
  );
  border-radius: 1rem;
  padding: 2rem;
`

const WeatherContainer = () => {
  const [city, setCity] = useState('Szczecin')
  const { weather, forecast, isLoading } = useWeather(city)

  function onEnterClick(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      setCity(e.target.value)
    }
  }

  return (
    <>
      <Search
        value={city}
        onClick={inputValue => setCity(inputValue)}
        onKeyDown={e => onEnterClick(e)}
      />
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        <Container>
          <City name={weather.name} coord={weather.coord} />
          {weather.main && (
            <Weather
              temp={weather.main.temp}
              humidity={weather.main.humidity}
              pressure={weather.main.pressure}
              sun={weather.sys}
            />
          )}
          {forecast && <Forecast forecast={forecast} />}
        </Container>
      )}
    </>
  )
}

export default WeatherContainer

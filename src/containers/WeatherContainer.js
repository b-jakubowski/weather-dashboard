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

const InfoText = styled.h4`
  color: white;
  text-align: center;
`

const WeatherContainer = () => {
  const [city, setCity] = useState('Szczecin')
  const { weather, forecast, isLoading, isError } = useWeather(city)

  function onEnterClick(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      setCity(e.target.value)
    }
  }

  const WeatherAndForecast = () => {
    return (
      <>
        {!isError && forecast.temp && weather.main ? (
          <>
            <City name={weather.name} coord={weather.coord} />
            <Weather
              temp={weather.main.temp}
              humidity={weather.main.humidity}
              pressure={weather.main.pressure}
              sun={weather.sys}
            />
            <Forecast forecast={forecast} />
          </>
        ) : (
          <InfoText>Cant find results for '{city}'</InfoText>
        )}
      </>
    )
  }

  return (
    <>
      <Search
        value={city}
        onClick={inputValue => setCity(inputValue)}
        onKeyDown={e => onEnterClick(e)}
      />
      <Container>
        {isLoading ? <InfoText>Loading....</InfoText> : <WeatherAndForecast />}
      </Container>
    </>
  )
}

export default WeatherContainer

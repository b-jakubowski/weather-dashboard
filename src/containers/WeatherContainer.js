import React, { useEffect, useState } from 'react'
import City from '../components/City'
import Weather from '../components/Weather'

const WeatherContainer = () => {
  const [weather, setWeather] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [city, setCity] = useState('Szczecin')

  function onEnterClick(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      fetchWeather()
    }
  }

  async function fetchWeather() {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
    )
    setIsLoading(true)
    res
      .json()
      .then(res => {
        setWeather(res)
        setIsLoading(false)
      })
      .catch(err => {
        console.error(err)
      })
  }

  useEffect(() => {
    fetchWeather()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <form>
        <label htmlFor="city" style={styles.label}>
          <input
            type="text"
            id="city-search"
            value={city}
            placeholder="Search for City"
            onChange={e => setCity(e.target.value)}
            onKeyDown={e => onEnterClick(e)}
            style={styles.searchInput}
          />
        </label>
      </form>
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        <>
          <City name={weather.name} coord={weather.coord} />
          {weather.main && (
            <Weather
              temp={weather.main.temp}
              humidity={weather.main.humidity}
              pressure={weather.main.pressure}
              sun={weather.sys}
            />
          )}
        </>
      )}
    </>
  )
}

const styles = {
  label: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem'
  },
  searchInput: {
    padding: '0.5rem',
    marginLeft: '1rem',
    width: '12rem',
    borderStyle: 'solid',
    borderWidth: '0 0 1.5px 0',
    borderColor: 'grey'
  }
}

export default WeatherContainer

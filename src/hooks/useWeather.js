import { useState, useEffect } from 'react'

function mapForecast(weatherData) {
  const tempByDay = {}
  const minTempByDay = {}
  const matchDate = /^\d{4}-\d*-\d*/g

  if (weatherData.city) {
    weatherData.list.forEach(forecast => {
      const today = new Date().toString().split(' ')[0]
      const dateKey = new Date(forecast.dt_txt.match(matchDate))
        .toString()
        .split(' ')[0]

      switch (true) {
        case dateKey === today:
          break
        case dateKey in tempByDay:
          tempByDay[dateKey].push(forecast.main.temp)
          minTempByDay[dateKey].push(forecast.main.temp_min)
          break
        default:
          tempByDay[dateKey] = [forecast.main.temp]
          minTempByDay[dateKey] = [forecast.main.temp_min]
          break
      }
    })
  }

  return {
    temp: getExtremeTemp(tempByDay, 'max'),
    minTemp: getExtremeTemp(minTempByDay, 'min')
  }
}

function getExtremeTemp(obj, extreme) {
  Object.keys(obj).forEach(day => {
    obj[day] = Math[extreme](...obj[day])
  })

  return obj
}

function useWeather(value) {
  const [weather, setWeather] = useState('')
  const [forecast, setForecast] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function fetchWeather() {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
      )
      setIsLoading(true)
      res
        .json()
        .then(res => {
          setWeather(res)
        })
        .then(() => {
          fetchForecast(value)
        })
        .catch(err => {
          setIsError(true)
          throw err
        })
    }

    async function fetchForecast(value = 'Szczecin') {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&APPID=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
      )
      res
        .json()
        .then(res => {
          setForecast(mapForecast(res))
          setIsLoading(false)
        })
        .catch(err => {
          setIsError(true)
          throw err
        })
    }

    fetchWeather()
  }, [value])

  return { weather, forecast, isLoading, isError }
}

export default useWeather

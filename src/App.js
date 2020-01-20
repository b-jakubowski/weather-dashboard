import React, { useState } from 'react'
import WeatherContainer from './containers/WeatherContainer'
import { Container } from '@material-ui/core'
import SearchBar from './components/SearchBar'

function App() {
  const [city, setCity] = useState('Szczecin')

  function onEnterClick(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      setCity(e.target.value)
    }
  }
  return (
    <>
      <SearchBar value={city} onKeyDown={e => onEnterClick(e)} />
      <Container maxWidth="lg">
        <WeatherContainer city={city} />
      </Container>
    </>
  )
}

export default App

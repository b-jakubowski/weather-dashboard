import React from 'react'
import { Container, Content } from './components/Layout'
import Search from './components/Search'
import WeatherContainer from './containers/WeatherContainer'

function App() {
  return (
    <Container>
      <Content>
        <Search />
        <WeatherContainer />
      </Content>
    </Container>
  )
}

export default App

import React from 'react'
import { Container, Content } from './components/Layout'
import WeatherContainer from './containers/WeatherContainer'

function App() {
  return (
    <Container>
      <Content>
        <WeatherContainer />
      </Content>
    </Container>
  )
}

export default App

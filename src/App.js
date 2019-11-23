import React from 'react'
import styled from '@emotion/styled'
import WeatherContainer from './containers/WeatherContainer'

export const Container = styled.div`
  display: flex;
  min-height: calc(100vh - 4rem);
  justify-content: center;
  padding: 2rem;
  background-color: hsl(0, 5%, 85%);
`

export const Content = styled.div`
  width: 34rem;
  background-color: white;
  padding: 2rem;
`

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

import React from 'react'
import styled from '@emotion/styled'

const City = props => {
  const { name, coord } = props
  const todayDate = new Date().toDateString()

  const Container = styled.div`
    margin-top: 0.5rem;
  `

  const CityName = styled.h3`
    font-size: 2rem;
    margin: 0;
    font-weight: normal;
  `

  const Coordinates = styled.div`
    display: flex;
    margin-left: 0.6rem;
  `

  const Coord = styled.p`
    color: grey;
    font-size: 0.8rem;
    margin: 0 0.5rem 0.3rem 0;
  `

  const CitiyContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5rem 0;
  `

  return (
    <Container>
      <CitiyContent>
        <CityName>{name}</CityName>
        {coord && (
          <Coordinates>
            <Coord>lng: {coord.lon}</Coord>
            <Coord>lat: {coord.lat}</Coord>
            <Coord>{todayDate}</Coord>
          </Coordinates>
        )}
      </CitiyContent>
    </Container>
  )
}

export default City

import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  margin-top: 0.5rem;
`

const CityContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem 0;
`

const CityName = styled.h3`
  font-size: 2.5rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.75);
`

const Coordinates = styled.div`
  display: flex;
  margin: 0.3rem 0 0 0.6rem;
`

const Coord = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.8rem;
  margin: 0 0.5rem 0.3rem 0;
`

const City = props => {
  const { name, coord } = props
  const todayDate = new Date().toDateString()

  return (
    <Container>
      <CityContent>
        <CityName>{name}</CityName>
        {coord && (
          <Coordinates>
            <Coord>lng: {coord.lon}</Coord>
            <Coord>lat: {coord.lat}</Coord>
            <Coord>{todayDate}</Coord>
          </Coordinates>
        )}
      </CityContent>
    </Container>
  )
}

export default City

/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'

const City = props => {
  const { name, coord } = props
  const todayDate = new Date().toDateString()

  const CityName = styled.h3`
    font-size: 2rem;
    margin: 0;
    font-weight: normal;
  `
  const Coord = styled.p`
    color: grey;
    font-size: 0.8rem;
    margin: 0 0.5rem 0.3rem 0;
  `

  return (
    <div
      css={css`
        margin-top: 0.5rem;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0.5rem 0;
        `}
      >
        <CityName>{name}</CityName>
        {coord && (
          <div
            css={css`
              display: flex;
              margin-left: 0.6rem;
            `}
          >
            <Coord>lng: {coord.lon}</Coord>
            <Coord>lat: {coord.lat}</Coord>
            <Coord>{todayDate}</Coord>
          </div>
        )}
      </div>
    </div>
  )
}

export default City

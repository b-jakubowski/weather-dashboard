/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled';

const City = (props) => {
  const { name, coord } = props;
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
  const DateTxt = styled.p`
    color: grey;
    margin: 0;
  `

  return (
    <div>
      <div
        css={css`
          display: flex;
          align-items: flex-end;
          margin: 0.5rem 0;
      `}>
        <CityName>{name}</CityName>
        {coord &&
          <div css={css`
            display: flex;
            margin-left: 0.6rem
          `}>
            <Coord>lng: {coord.lon}</Coord>
            <Coord>lat: {coord.lat}</Coord>
          </div>
        }
      </div>
      <DateTxt>{todayDate}</DateTxt>
    </div>
  )
}

export default City

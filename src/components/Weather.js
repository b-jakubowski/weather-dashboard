/** @jsx jsx */
import styled from '@emotion/styled';
import { css,jsx } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faTint } from '@fortawesome/free-solid-svg-icons';

const Weather = props => {
  const { temp, humidity, pressure } = props

  const Temperature = styled.h3`
    font-size: 4rem;
    padding: 0.5rem;
    font-weight: normal;
    margin: 0.5rem 1rem;
  `

  const WeatherDetails = styled.p`
    margin: 0;
    padding: 0.2rem;
  `

  return (
    <div css={css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}>
      <Temperature>
        {temp}°C
      </Temperature>
      <div css={css`
        display: flex;
        flex-direction: column;
      `}>
        <WeatherDetails>
          <FontAwesomeIcon
            icon={faTint}
            css={css`
              margin-right: 0.5rem;
            `}
          />
          Humidity: {humidity} %
        </WeatherDetails>
        <WeatherDetails>
          <FontAwesomeIcon
            icon={faArrowDown}
            css={css`
              margin-right: 0.5rem;
            `}
          />
          Pressure: {pressure} hPa
        </WeatherDetails>
      </div>
    </div>
  )
}

export default Weather

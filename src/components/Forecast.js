import React from 'react'

const Forecast = ({ forecast }) => {
  return <div>{JSON.stringify(forecast, '', 2)}</div>
}

export default Forecast

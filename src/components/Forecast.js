import React, { useEffect } from 'react'
import Chart from 'chart.js'

const Forecast = ({ forecast }) => {
  let chartCanvas

  const setChart = () => {
    return new Chart(chartCanvas, {
      type: 'bar',
      options: {
        legend: {
          display: false
        },
        yAxes: [
          {
            display: true,
            ticks: {
              suggestedMin: 0,
              suggestedMax: 50
            }
          }
        ]
      },
      data: {
        labels: Object.keys(forecast),
        datasets: [
          {
            label: '',
            data: Object.values(forecast),
            backgroundColor: ['rgba(100, 100, 100, 0.7)']
          }
        ]
      }
    })
  }

  useEffect(() => {
    setChart()
    // eslint-disable-next-line
  }, []);



  return (
    <div style={styles.container}>
      <h4 style={styles.title}>5 day forecast</h4>
      <canvas style={styles.canvas} ref={node => (chartCanvas = node)} />
    </div>
  )
}

const styles = {
  container: {
    marginTop: '1rem'
  },
  canvas: {
    width: 800,
    height: 400
  },
  title: {
    textAlign: 'center'
  }
}

export default Forecast

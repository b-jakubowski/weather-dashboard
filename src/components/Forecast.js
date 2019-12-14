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
        responsive: true,
        scales: {
          yAxes: [
            {
              display: true,
              ticks: {
                suggestedMin: 0,
                fontColor: 'white'
              },
              gridLines: {
                display: false
              }
            }
          ],
          xAxes: [
            {
              stacked: true,
              ticks: {
                fontColor: 'white'
              },
              gridLines: {
                display: false
              }
            }
          ]
        }
      },
      data: {
        labels: Object.keys(forecast.temp),
        datasets: [
          {
            label: '',
            data: Object.values(forecast.minTemp),
            backgroundColor: 'blue'
          },
          {
            label: '',
            data: Object.values(forecast.temp),
            backgroundColor: 'rgba(255,255,255, 0.9)'
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
      <canvas style={styles.canvas} ref={node => (chartCanvas = node)} />
    </div>
  )
}

const styles = {
  container: {
    marginTop: '3rem',
    maxHeight: '100%'
  },
  canvas: {
    maxWidth: '100%'
  }
}

export default Forecast

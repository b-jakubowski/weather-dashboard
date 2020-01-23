import React, { useEffect } from 'react'
import Chart from 'chart.js'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    [theme.breakpoints.up('md')]: {
      height: 400
    }
  },
  title: {
    marginBottom: 16
  },
  canvas: {
    maxWidth: '100%'
  }
}))

const Forecast = ({ forecast }) => {
  const classes = useStyles()
  let chartCanvas

  useEffect(() => {
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
                  suggestedMin: 0
                },
                gridLines: {
                  display: false
                }
              }
            ],
            xAxes: [
              {
                stacked: true,
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
              backgroundColor: '#4c9bc4'
            },
            {
              label: '',
              data: Object.values(forecast.temp),
              backgroundColor: '#fac76c'
            }
          ]
        }
      })
    }

    setChart()
  }, [chartCanvas, forecast])

  return (
    <Card>
      <CardContent className={classes.container}>
        <Typography className={classes.title} variant="h5" component="h2">
          Forecast
        </Typography>
        <canvas className={classes.canvas} ref={node => (chartCanvas = node)} />
      </CardContent>
    </Card>
  )
}

Forecast.propTypes = {
  forecast: PropTypes.object
}

export default Forecast

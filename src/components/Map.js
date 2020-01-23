import React, { useEffect } from 'react'
import L from 'leaflet'
import { Card, CardContent, makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  container: {
    height: 400,
    [theme.breakpoints.down('sm')]: {
      height: 160
    }
  },
  map: {
    width: '100%',
    height: '100%'
  }
}))

const Map = ({ lat, lon }) => {
  const classes = useStyles()

  useEffect(() => {
    L.map('map', {
      center: [lat, lon],
      zoom: 10,
      layers: [
        L.tileLayer(
          'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
          {
            attribution:
              '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          }
        ),
        L.marker([lat, lon])
      ]
    })
      .invalidateSize(true)
      .dragging.disable()
  }, [lat, lon])

  return (
    <Card>
      <CardContent className={classes.container}>
        <div className={classes.map} id="map"></div>
      </CardContent>
    </Card>
  )
}

Map.propTypes = {
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired
}

export default Map

import React, { useEffect } from 'react'
import L from 'leaflet'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const Map = ({ lat, lon }) => {
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
    }).invalidateSize(true)
  }, [lat, lon])

  return (
    <Card>
      <CardContent style={{ width: 'auto', height: 400 }}>
        <div style={{ width: '100%', height: '100%' }} id="map"></div>
      </CardContent>
    </Card>
  )
}

export default Map

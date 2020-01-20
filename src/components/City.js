import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    minWidth: 300
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    width: 35,
    marginRight: 4
  },
  info: {
    display: 'flex',
    alignItems: 'center'
  },
  temp: {
    marginBottom: 4
  },
  secondaryText: {
    fontSize: '1.3rem'
  }
})

const City = ({ name, coord }) => {
  const classes = useStyles()
  const todayDate = new Date().toDateString()

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={`${classes.temp} ${classes.info}`}
          variant="h3"
          component="h3"
        >
          {name}
        </Typography>
        <Typography
          className={`${classes.info} ${classes.secondaryText}`}
          variant="h5"
          component="h5"
        >
          lng: {coord.lon} lat: {coord.lat}
        </Typography>
        <Typography
          className={`${classes.info} ${classes.secondaryText}`}
          variant="h5"
          component="h5"
        >
          {todayDate}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default City

import React, { useState } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import SearchIcon from '@material-ui/icons/Search'
import { fade, InputBase, makeStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'center'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 220,
      '&:focus': {
        width: 280
      }
    }
  }
}))

const SearchBar = ({ onKeyDown, value }) => {
  const [city, setCity] = useState(value)
  const classes = useStyles()

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            classes={{
              input: classes.inputInput
            }}
            value={city}
            inputProps={{ 'aria-label': 'search' }}
            onChange={e => setCity(e.target.value)}
            onKeyDown={onKeyDown}
          />
        </div>
      </Toolbar>
    </AppBar>
  )
}

SearchBar.propTypes = {
  onKeyDown: PropTypes.func,
  value: PropTypes.string
}

export default SearchBar

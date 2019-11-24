import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = ({ onKeyDown }) => {
  const [city, setCity] = useState('Szczecin')

  return (
    <form>
      <label htmlFor="city" style={styles.label}>
        <input
          type="text"
          id="city-search"
          value={city}
          placeholder="Search for City"
          onChange={e => setCity(e.target.value)}
          onKeyDown={onKeyDown}
          style={styles.searchInput}
        />
        <FontAwesomeIcon style={styles.icon} icon={faSearch} />
      </label>
    </form>
  )
}

const styles = {
  label: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1rem'
  },
  searchInput: {
    padding: '0.5rem',
    marginLeft: '1rem',
    width: '12rem',
    borderStyle: 'solid',
    borderWidth: '0 0 1.5px 0',
    borderColor: 'grey'
  },
  icon: {
    marginLeft: '-2rem',
    color: 'lightgrey'
  }
}

export default Search

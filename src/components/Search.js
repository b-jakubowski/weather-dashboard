import React, { useState } from 'react'

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
      </label>
    </form>
  )
}

const styles = {
  label: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem'
  },
  searchInput: {
    padding: '0.5rem',
    marginLeft: '1rem',
    width: '12rem',
    borderStyle: 'solid',
    borderWidth: '0 0 1.5px 0',
    borderColor: 'grey'
  }
}

export default Search

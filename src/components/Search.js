import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled'

const SearchLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`

const SearchInput = styled.input`
  padding: 0.5rem;
  margin-left: 1rem;
  width: 12rem;
  border-style: solid;
  border-width: 0 0 1.5px 0;
  border-color: grey;
`

const IconButton = styled.button`
  margin: 1rem;
  padding: 0.7rem 1rem;
  border: 1px solid grey;
  border-radius: 0.2rem;
`

const Search = ({ onKeyDown, onClick, value }) => {
  const [city, setCity] = useState(value)

  function onSubmit(e) {
    e.preventDefault()
    onClick(city)
  }

  return (
    <form onSubmit={e => onSubmit(e)}>
      <SearchLabel htmlFor="city">
        <SearchInput
          type="text"
          id="city-search"
          value={city}
          placeholder="Search for City"
          onChange={e => setCity(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <IconButton type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </IconButton>
      </SearchLabel>
    </form>
  )
}

export default Search

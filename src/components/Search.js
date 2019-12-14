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

const Icon = styled(FontAwesomeIcon)`
  margin-left: -2rem;
  color: lightgrey;
`

const Search = ({ onKeyDown }) => {
  const [city, setCity] = useState('Szczecin')

  return (
    <form>
      <SearchLabel htmlFor="city">
        <SearchInput
          type="text"
          id="city-search"
          value={city}
          placeholder="Search for City"
          onChange={e => setCity(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <Icon icon={faSearch} />
      </SearchLabel>
    </form>
  )
}

export default Search

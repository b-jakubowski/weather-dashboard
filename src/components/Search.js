/** @jsx jsx */
import { useState } from 'react'
import { css, jsx } from '@emotion/core'

const Search = () => {
  const [location, setLocation] = useState('')
  return (
    <div>
      <form action="">
        <label
          htmlFor="city"
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
          `}
        >
          Search for location
          <input
            type="text"
            id="city-search"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
            css={css`
              margin-top: 1rem;
              padding: 0.5rem;
              width: 12rem;
              border-style: solid;
              border-width: 0 0 1.5px 0;
              border-color: grey;
            `}
          />
        </label>
      </form>
    </div>
  )
}

export default Search

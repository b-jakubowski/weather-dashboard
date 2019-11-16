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
            justify-content: center;
            margin-bottom: 1rem;
          `}
        >
          <input
            type="text"
            id="city-search"
            value={location}
            placeholder="Search for City"
            onChange={e => setLocation(e.target.value)}
            css={css`
              padding: 0.5rem 0;
              margin-left: 1rem;
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

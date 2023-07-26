import React from 'react'

const SearchBar = ({ query, onChangeSearchQuery }) => {
  return (
    <>
      <input
        className='btn search' 
        type='text'
        placeholder='Search...'
        value={query}
        onChange={(e) => { onChangeSearchQuery(e.target.value) }}
      />
    </>
  )
}

export default SearchBar
import { useTodoContext } from '../context/TodoContext'


const SearchBar = () => {
  const {
    query,
    hangleSearchQueryChange
  } = useTodoContext();

  return (
    <>
      <input
        className='btn search' 
        type='text'
        placeholder='Search...'
        value={query}
        onChange={(e) => { hangleSearchQueryChange(e.target.value) }}
      />
    </>
  )
}

export default SearchBar
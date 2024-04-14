import { InputGroup, Form, Stack } from 'react-bootstrap';
import { useTodoContext } from '../context/TodoContext'
import ControlButtons from './ControlButtons';

const SearchBar = () => {
  const {
    query,
    handleSearchQueryClear,
    hangleSearchQueryChange
  } = useTodoContext();

  return (
    <Stack 
      className='flex mb-3'
      gap={2} 
      direction='horizontal'
    >
      <InputGroup className='' size='md'>
        <Form.Control
          type='text'
          placeholder="Search to do"
          aria-label="search"
          value={query}
          onChange={(e) => { hangleSearchQueryChange(e.target.value) }}
        />
        <InputGroup.Text
          className='clear-search-btn'
          onClick={handleSearchQueryClear}
        >
          &times;
        </InputGroup.Text>
      </InputGroup>
      <ControlButtons />
    </Stack>
  )
}

export default SearchBar
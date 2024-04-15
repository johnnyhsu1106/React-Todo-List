import { InputGroup, Form, Stack } from 'react-bootstrap';
import { useTodoContext } from '../context/TodoContext'
import ControlButtons from './ControlButtons';

const SearchBar = () => {
  const {
    query,
    handleSearchQueryClear,
    handleSearchQueryChange
  } = useTodoContext();

  return (
    <Stack 
      className='d-flex mb-5 justify-content-between align-items-center w-100'
      gap={2} 
      direction='horizontal'
    >
      <InputGroup className='w-75' size='sm'>
        <Form.Control
          type='text'
          placeholder="Search to do"
          aria-label="search"
          value={query}
          onChange={(e) => { handleSearchQueryChange(e.target.value) }}
        />
        <InputGroup.Text
          className='clear-search-btn'
          onClick={handleSearchQueryClear}
        >
          &times;
        </InputGroup.Text>
      </InputGroup>
      <div className='vr' />
      <ControlButtons />
    </Stack>
  )
}

export default SearchBar
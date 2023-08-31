import { InputGroup, Form, Stack } from 'react-bootstrap';
import { useTodoContext } from '../context/TodoContext'
import ControlButtons from './ControlButtons';

const SearchBar = () => {
  const {
    query,
    hangleSearchQueryChange
  } = useTodoContext();

  return (
    <Stack 
      className='flex m-3 position-absolute top-0 end-0'
      gap={3} 
      direction='horizontal'
    >
      <InputGroup className='' size='md'>
        <Form.Control
          type='text'
          placeholder="Search to do item"
          aria-label="search"
          value={query}
          onChange={(e) => { hangleSearchQueryChange(e.target.value) }}
        />
      </InputGroup>
      <ControlButtons />
    </Stack>
  )
}

export default SearchBar
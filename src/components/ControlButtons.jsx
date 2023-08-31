import { ButtonGroup, Button, Stack } from 'react-bootstrap';
import { useTodoContext } from '../context/TodoContext';


const ControlButtons = () => {
  const {
    handleCompletedTodosDelete,
    handleAllTodosDelete
  } = useTodoContext();
  
  return (
    <>
      <Button
        className='fs-0'
        size='sm'
        variant='outline-light'
        onClick={handleCompletedTodosDelete}
      >
        Delete Completed
      </Button>
      <div className='vr' />
      <Button 
        size='sm'
        variant='danger'
        onClick={handleAllTodosDelete}
      >
        Reset
      </Button>
    </>
  )
}

export default ControlButtons;
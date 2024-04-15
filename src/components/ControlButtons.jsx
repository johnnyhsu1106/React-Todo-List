import { Button } from 'react-bootstrap';
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
        variant='success'
        onClick={handleCompletedTodosDelete}
      >
        Clear Completed
      </Button>
      <Button 
        size='sm'
        variant='danger'
        onClick={handleAllTodosDelete}
      >
        Clear All
      </Button>
    </>
  )
}

export default ControlButtons;
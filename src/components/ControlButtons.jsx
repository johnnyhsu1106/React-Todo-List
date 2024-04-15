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
        size='md'
        variant='success'
        onClick={handleCompletedTodosDelete}
      >
        Clear
      </Button>
      <div className='vr' />
      <Button 
        size='md'
        variant='danger'
        onClick={handleAllTodosDelete}
      >
        Reset
      </Button>
    </>
  )
}

export default ControlButtons;
import { useTodoContext } from '../context/TodoContext';


const ControlButtons = () => {
  const {
    handleCompletedTodosDelete,
    handleAllTodosDelete
  } = useTodoContext();
  
  return (
    <>
      <button
        type='text'
        className='btn btn-warning'
        onClick={handleCompletedTodosDelete}
      >
        Delete Completed
      </button>

      <button
        type='reset'
        className='btn btn-danger reset'
        onClick={handleAllTodosDelete}
      >
        Reset
      </button>
    </>
  )
}

export default ControlButtons;
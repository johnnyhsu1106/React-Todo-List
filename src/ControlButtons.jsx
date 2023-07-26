import React from 'react'

const ControlButtons = ( {
  onDeleteCompletedTos,
  onDeltedAllTodos
}) => {
  return (
    <>
      <button
        type='text'
        className='btn btn-warning'
        onClick={onDeleteCompletedTos}
      >
        Delete Completed
      </button>

      <button
        type='reset'
        className='btn btn-danger reset'
        onClick={onDeltedAllTodos}
      >
        Reset
      </button>
    </>
  )
}

export default ControlButtons;
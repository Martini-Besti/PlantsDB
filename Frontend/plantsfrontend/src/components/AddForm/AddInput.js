import React from 'react'

const AddInput = ( { name } ) => {
    
  return (
    <div className='flex flex-col justify-center items-center my-2'>
      <label 
        className='mb-2'
        htmlFor={name}
      >
        {name}
      </label>

      <input 
        type='text'
        className='border-solid border-black border-2 rounded-full mx-4 mb-4 text-black px-4 py-1'
      />
    </div>
    )

}

export default AddInput

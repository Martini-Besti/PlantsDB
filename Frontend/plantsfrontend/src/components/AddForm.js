import React from 'react'

import AddInput from './AddForm/AddInput'

const AddForm = ( { client } ) => {

  const submitForm = async (e) => {
    e.preventDefault()
    // pass the data from the form to this method to send it to the database. 
    await client.addPlant()
  }

  return (
    <div
      className='w-[100vw] h-[100vh] absolute  flex justify-center items-center'
    >
      <form
        className='bg-[#663B15] p-4 rounded-2xl border-solid border-black border-4 font-bold text-md text-[#FEFAE0] text-center shadow-l'
        onSubmit={submitForm}
      >
        <AddInput name='Plant Name' />
        <AddInput name='Watering Frequency (Days)'/>

        <button
          type='submit'
          className='bg-[#FEFAE0] border-solid border-2 border-[black] px-8 py-2 rounded-xl text-[#663B15] text-bold'
        >
          ADD
        </button>

      </form>
    </div>
  )
}

export default AddForm

import React, { useState } from 'react'

const AddButton = ( { showFunction } ) => {

  return (
    <div className ='flex justify-center font-bold'>
    <button
      className='bg-[#606C38] border-solid border-2 border-[#283618] px-8 py-2 rounded-xl text-[#FEFAE0] m-4'
      onClick={showFunction}
    >
      Add New Plant
    </button>
    </div>
  )

}

export default AddButton
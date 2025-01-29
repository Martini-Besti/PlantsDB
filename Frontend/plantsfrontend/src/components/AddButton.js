import React from 'react'

const AddButton = () => {

  const [isFormVisible, setIsFormVisible] = useState(false)

  const submitForm = (name, watering) => {
    //ADD TO DATABASE
    setFormVisible(false)
  }

  return (
    <button
      className=''
      onSubmit={setIsFormVisible}
    >
      Add New Plant
    </button>
  )

}

export default AddButton
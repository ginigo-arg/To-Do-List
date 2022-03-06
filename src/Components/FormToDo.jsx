import React, { useState } from 'react'

const FormToDo = (props) => {

  const [descripcion, setDescripcion] = useState("")
  const {handleAddItem} = props
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(descripcion)
    handleAddItem({
      done: false,
      id:(+new Date()).toString(),
      descripcion
    })
    setDescripcion("")
  }


  return (
    <>
    <div>FormToDo</div>
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      name=''
      value={descripcion}
      placeholder="Ingresa tu tarea"
      onChange={(e)=>{
        setDescripcion(e.target.value)
      }}
      className="border rounded-md border-black bg-gray-200"
      >
      </input>
      <button
      disabled={descripcion ? "" : "disable"}
      className="bg-gray-900 text-white p-2"
      >Agregar</button>
    </form>
    </>
  )
}

export default FormToDo
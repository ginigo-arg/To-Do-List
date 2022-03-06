import React, { useState } from 'react'

const FormToDo = (props) => {

  const [descripcion, setDescripcion] = useState("")
  const {handleAddItem} = props
  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddItem({
      done: false,
      id:(+new Date()).toString(),
      descripcion
    })
    setDescripcion("")

  }


  return (
    <>
    <form onSubmit={handleSubmit}
    className='w-full flex flex-row justify-center my-4 mb-8'>
      <input
      type="text"
      name=''
      value={descripcion}
      placeholder="Agrega una tarea"
      onChange={(e)=>{
        setDescripcion(e.target.value)
      }}
      className="border rounded-md rounded-r-none w-8/12 shadow
      px-3 py-2 focus:outline-none focus:border-sky-500"
      >
      </input>
      <button
      disabled={descripcion ? "" : "disable"}
      className="border rounded-md rounded-l-none bg-sky-500/75 text-white font-semibold p-1 w-3/12 shadow rounded-lg hover:bg-sky-500/100 disabled:bg-stone-300"
      >Agregar</button>
    </form>
    </>
  )
}

export default FormToDo
import React, { useState } from 'react'
import FormToDo from './FormToDo'
import TaskList from './TaskList'

const Container = () => {
  //estado principal
  const [list, setList] = useState([])
  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
    console.log(list)
  }

  return (
    <>
    <div className='w-9/12 flex flex-col justify-center items-center px-4'
    >
      <h2 className='text-2xl font-bold dark:text-sky-50'>Notas</h2>
    <FormToDo handleAddItem={handleAddItem}/>
    <TaskList list={list} setList={setList}/>
    </div>
    </>
  )
}

export default Container
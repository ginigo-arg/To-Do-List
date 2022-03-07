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
    <div className='flex flex-col justify-center items-center px-4 h-full mb-10 w-10/12 sm:w-10/12 md:w-8/12 lg-8/12'
    >
      <h2 className='text-2xl font-bold dark:text-sky-50'>Notas</h2>
    <FormToDo handleAddItem={handleAddItem}/>
    <TaskList list={list} setList={setList}/>
    </div>
    </>
  )
}

export default Container
import React, { useState } from 'react'
import FormToDo from './FormToDo'
import TaskList from './TaskList'

const Container = () => {
  const [list, setList] = useState([])
  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  }

  return (
    <>
    <div className='w-9/12 border border-dark flex flex-col justify-center items-center'
    >Container
    <FormToDo handleAddItem={handleAddItem}/>
    <TaskList list={list} setList={setList}/>
    </div>
    </>
  )
}

export default Container
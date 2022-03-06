import React from 'react'
import CheckBox from './CheckBox'

const TaskList = (props) => {
  const {list, setList} = props
  
  const onChangeStatus = e => {
    const {name, checked} = e.target
    console.log('target:', e)
    console.log('name:', name)
    console.log('checked:', checked)
    const updateList = list.map(item => ({
      ...item,
      done: item.id === name ? checked : item.done
    }))
    setList(updateList)
  }
  
  const check = list.map(item => (

    <CheckBox key={item.id} data={item} onChange={onChangeStatus}/>
    
  ))

  const onClickRemoveItem = e => {
    const updateList = list.filter(item => !item.done);
    setList(updateList);
  };

  return (
    <>
    <div className='w-full my-2 text-center'>
      {list.length ? check : "No hay lista"}
      {list.length ? (
        <p>
          <button onClick={onClickRemoveItem}
          className="bg-sky-500/75 rounded border-indigo-600 w-full h-12 text-white font-bold"
          >Delete All One</button>
        </p>
      ): null}
    </div>
    
    </>
  )
}

export default TaskList
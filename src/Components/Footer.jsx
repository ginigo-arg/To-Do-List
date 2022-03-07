import React, { useEffect } from 'react'
import Tailwindcss from '../Assets/Icons/tailwind'
import ReactIcon from '../Assets/Icons/react'


const Footer = () => {
    
    let mode = document.getElementsByClassName('js-focus-visible dark')
    
    useEffect(()=> {

    }, [mode])
    
  return (
    <div className='w-full bg-slate-200 dark:bg-slate-600 h-10 flex items-center justify-center'>
        <div className='flex flex-row justify-center items-center'>
         <span className='mr-2 dark:text-slate-200'>
            Developed with 
        </span>
            <ReactIcon className='mr-2'/>
            <strong className='mr-2 text-black dark:text-slate-200'>&</strong>
        {mode.length ? (<Tailwindcss color="#000" className="mr-2"/>) 
        : (<Tailwindcss color="#fff" className="mr-2"/>)}
        </div>
        
    </div>
  )
}

export default Footer
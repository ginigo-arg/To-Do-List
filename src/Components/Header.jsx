import React from 'react'
import DarkLogo from '../Assets/logo-to-dark.png'
import LightLogo from '../Assets/logo-to-light.png'
const Header = () => {
  return (
      <>
      <div className='flex flex-row justify-center my-3'>
        <div className='rounded-md bg-stone-100 row flex flex-row w-4/5 justify-between px-4 py-4 shadow'>
            <div>
                <img src={LightLogo} alt='logo'
                className='w-10'/>           
            </div>
            <nav >
                <ul className='flex flex-row items-center'>
                    <li className='bg-stone-400 '>Github</li>
                    <li>DarkMode</li>
                </ul>
            </nav>
        </div>
      </div>
      </>
  )
}

export default Header
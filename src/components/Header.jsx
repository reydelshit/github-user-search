import React, { useState } from 'react'

const Header = ({setDarkMode, darkMode}) => {

    const [setIcon, setSetIcon] = useState(false)
    const setDark = () => {
        setSetIcon(!setIcon)
        setDarkMode(!darkMode)
    }
  return (
    <header className='flex justify-between text-2xl w-full md:w-4/5 lg:w-2/5 mb-5 text-cyan-300 dark:text-secondaryColor'>
        <h1 className='cursor-pointer'>GITHUB USER SEARCH</h1>
        <div onClick={setDark}>
            {setIcon ? <i className="fa-solid fa-moon cursor-pointer"></i> : <i className="fa-solid fa-sun cursor-pointer"></i>}
        </div>
    </header>
  )
}

export default Header
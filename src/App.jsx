import { useEffect, useState } from "react";

import User from "./components/User"
import SearchUser from "./components/SearchUser";
import Header from "./components/Header"

import Loader from "./components/Loader";



function App() {

  const [userData, setUserData] = useState([])
  const [error, setError] = useState('')
  const [inputValue, setInputValue] = useState('reydelshit')

  const [darkMode, setDarkMode] = useState(false)

  const [loading, setLoading] = useState(false)

  const [userNotFound, setUserNotFound] = useState('')


  useEffect(() => {
    //default
    fetchUserData()
  }, [])

  const fetchUserData = async () => {

    setLoading(true)
    try{
      const getData = await fetch(`https://api.github.com/users/reydelshit`)
      const gotData = await getData.json()
      setUserData([gotData])
      setLoading(false)
    }
    catch {
      setError('error')
    }
  }

  const searchUser = async (e) => {
    e.preventDefault()

    if(!inputValue && inputValue === ''){
      return inputValue
    }

    setLoading(true)
    try{
      const getData = await fetch(`https://api.github.com/users/${inputValue}`)
      const gotData = await getData.json()
      setUserData([gotData])
      console.log(gotData)
      setLoading(false)

      if(gotData.message === 'Not Found'){
        setUserNotFound('user not found')
      }

    }
    catch {
      setError('error')
    }

  }

  const userInput = (e) => {
    const setLowerCase = e.target.value.toLowerCase()
    setInputValue(setLowerCase)
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="flex items-center justify-center flex-col w-screen h-screen p-3 lg:p-10 dark:bg-cyan-50 bg-mainBG transition-colors ease-out duration-500">
        <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
          <SearchUser searchUser={searchUser} userInput={userInput}/>
        <div className="flex items-center justify-center border-2 h-2/3 md:h-4/6 lg:h-h-2/4 w-full md:w-4/5 lg:w-2/5 dark:bg-white border-cyan-300 p-3 lg:p-5 rounded-2xl dark:border-secondaryColor">
          {error}

          {userNotFound ? <h1 className="text-cyan-300">user not found bruh</h1> : 
          <>
            {loading  ? <Loader /> : <User userData={userData} />}
          </>}
        </div>
      </div>
    </div>
  );
}

export default App;

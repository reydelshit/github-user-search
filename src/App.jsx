import { useEffect, useState } from "react";
import User from "./components/User"
import SearchUser from "./components/SearchUser";




function App() {

  const [userData, setUserData] = useState([])
  const [error, setError] = useState('')
  const [inputValue, setInputValue] = useState('reydelshit')


  useEffect(() => {

    //default

    const fetchUserData = async () => {
      try{
        const getData = await fetch(`https://api.github.com/users/${inputValue}`)
        const gotData = await getData.json()
        setUserData([gotData])
      }
      catch {
        setError('error')
      }
    }
    fetchUserData()

  }, [])

  const searchUser = async (e) => {
    e.preventDefault()

    if(!inputValue && inputValue === ''){
      return inputValue
    }

    try{
      const getData = await fetch(`https://api.github.com/users/${inputValue}`)
      const gotData = await getData.json()
      setUserData([gotData])
      console.log(gotData)
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
    <div className="flex items-center flex-col w-screen h-screen p-5 lg:p-10">
        <SearchUser searchUser={searchUser} userInput={userInput}/>
      <div className="border-2 h-auto lg:h-4/6 w-full md:w-4/5 lg:w-2/5 border-gray-700 p-5 rounded-2xl">
        {error}
        <User userData={userData} />
      </div>
    </div>
  );
}

export default App;

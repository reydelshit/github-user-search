import { useEffect, useState } from "react";
import User from "./components/User"



function App() {

  const [userData, setUserData] = useState([])
  const [error, setError] = useState('')


  useEffect(() => {
    githubUser()
  }, [])
  
  const githubUser = async () => {

    try{
      const getData = await fetch('https://api.github.com/users/reydelshit')
      const gotData = await getData.json()

      setUserData([gotData])
      console.log(gotData)

    }
    catch {
      setError('error')
    }

  }





  return (
    <div className="main">
      <User userData={userData} />
    </div>
  );
}

export default App;

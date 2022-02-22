import React from 'react'

const User = ({userData}) => {
  return (
    <>
      {userData.map((wow) => 
        <div key={wow.login}>
          <h1>{wow.bio}</h1>
          <h1>{wow.login}</h1>
        </div>)}
    </>
  )
}

export default User
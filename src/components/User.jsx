import React from 'react'

const User = ({userData}) => {


  const formatDate = userData.map((date) => {

    const dateOptions = {year: 'numeric', month: 'long', day: 'numeric' };
    const getTheDate = date.created_at
    const settingUpDate = new Date(getTheDate).toLocaleDateString("en-US", dateOptions)
    return settingUpDate
  })


  return (
    <>
      {userData.map((wow, index) => 
        <div key={index}>
          <div className='flex w-full justify-around mb-5'>
              <img className='w-28 h-28 object-fill rounded-full mx-3' src={wow.avatar_url} alt="profile" />
            <div className='flex flex-col p-5 items-start w-9/12'>
              <h2 className='text-cyan-600 font-bold text-xl'>{wow.name}</h2>
              <span className='text-cyan-300'>{wow.login}</span>
            </div>
            <span className='w-40 text-cyan-600 text-xs '>{formatDate}</span>
          </div>
          <div className='w-full h-28p-1 mb-5'>
            <span className='inline-block'>{wow.bio ? <p className='inline-block text-sm break-all text-cyan-600'>{wow.bio}</p> : "there's no existing bio bruh"}</span>
          </div>
          <div className='flex w-full justify-between bg-cyan-400 p-4 rounded-xl'>
            <div>
              <span className='block'>Followers</span>
              <span className='font-bold text-cyan-900'>{wow.followers}</span>
            </div>
            <div>
              <span className='block'>Following</span>
              <span className='font-bold text-cyan-900'>{wow.following}</span>
            </div>
            <div>
              <span className='block'>Public Repo</span>
              <span className='font-bold text-cyan-900'>{wow.public_repos}</span>
            </div>
          </div>
          <div className='flex items-start flex-col p-1 mt-5 text-left w-full'>
            <div>
              <i className="fa-solid fa-location-dot mr-3 text-cyan-400 text-xl"></i>
              <span>{wow.location ? <span>{wow.location}</span> : 'not available'}</span>
            </div>
            <div className=''>
              <i className="fa-solid fa-pencil mr-3 text-cyan-400 text-xl"></i>
              <span>{wow.blog ? <a href={wow.blog} target="_blank">{wow.blog}</a> : 'not available'}</span>
            </div>
            <div>
              <i className="fa-brands fa-twitter mr-3 text-cyan-400 text-xl"></i>
              <span>{wow.twitter_username ? <span>{wow.twitter_username}</span> : 'not available'}</span>
            </div>
          </div>
        </div>)}
    </>
  )
}

export default User
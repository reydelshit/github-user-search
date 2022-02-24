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
          <div className='flex w-full items-center justify-around mb-5'>
              <img className='w-3/12 h-1/4 md:w-28 md:h-28 object-fill rounded-full mr-3 md:mx-2' src={wow.avatar_url} alt="profile" />
          <div className='flex flex-col md:flex-row w-full items-start p-1 md:p-5'>
            <div className='flex flex-col items-start w-full mb-1'>
              <h2 className='text-cyan-300 font-bold text-xl md:text-2xl dark:text-secondaryColor'>{wow.name}</h2>
              <span className='text-cyan-400 dark:text-secondaryColor'>@{wow.login}</span>
            </div>
            <span className='text-cyan-400 w-36 text-xs text-left md:text-right dark:text-secondaryColor'>{formatDate}</span>
          </div>
          </div>
          <div className='w-full h-28p-1 mb-5'>
            <span className='inline-block text-cyan-300 dark:text-secondaryColor'>{wow.bio ? <p className='inline-block text-sm break-all '>{wow.bio}</p> : "there's no existing bio bruh"}</span>
          </div>
          <div className='flex flex-col md:flex-row w-full justify-between bg-gray-600 border-2 border-cyan-300 p-1 md:p-4 rounded-xl dark:bg-gray-100 dark:border-secondaryColor'>
            <div>
              <span className='block text-sm text-cyan-300 dark:text-secondaryColor'>Followers</span>
              <span className='font-bold text-white dark:text-black'>{wow.followers}</span>
            </div>
            <div>
              <span className='block text-sm text-cyan-300 dark:text-secondaryColor'>Following</span>
              <span className='font-bold text-white dark:text-black'>{wow.following}</span>
            </div>
            <div>
              <span className='block text-sm text-cyan-300 dark:text-secondaryColor'>Public Repo</span>
              <span className='font-bold text-white dark:text-black'>{wow.public_repos}</span>
            </div>
          </div>
          <div className='flex items-start flex-col p-1 mt-5 text-left w-full'>
            <div>
              <i className="fa-solid fa-location-dot mr-3 text-cyan-400 text-xl dark:text-secondaryColor"></i>
              <span className='text-sm text-cyan-300 dark:text-secondaryColor'>{wow.location ? <span>{wow.location}</span> : 'not available'}</span>
            </div>
            <div className=''>
              <i className="fa-solid fa-pencil mr-3 text-cyan-400 text-xl dark:text-secondaryColor"></i>
              <span className='text-sm text-cyan-300 dark:text-secondaryColor'>{wow.blog ? <a href={wow.blog} target="_blank" rel="noreferrer">{wow.blog}</a> : 'not available'}</span>
            </div>
            <div>
              <i className="fa-brands fa-twitter mr-3 text-cyan-400 text-xl dark:text-secondaryColor"></i>
              <span className='text-sm text-cyan-300 dark:text-secondaryColor'>{wow.twitter_username ? <span>{wow.twitter_username}</span> : 'not available'}</span>
            </div>
          </div>
        </div>)}
    </>
  )
}

export default User
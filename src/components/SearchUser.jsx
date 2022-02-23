import React from 'react'

const SearchUser = ({userInput, searchUser}) => {
  return (
      <form onSubmit={searchUser} className='flex relative border-2 w-full md:w-4/5 lg:w-2/5 dark:bg-white border-cyan-300 mb-5  px-5 rounded-2xl mx-10 dark:border-secondaryColor'>
          <input type="text" 
          className=' w-full text-left p-4 outline-none bg-transparent dark:bg-white text-cyan-300 dark:text-secondaryColor'
          onChange={userInput} 
          placeholder="search user by username"/>
          <button type='submit' className='absolute right-5 top-3  cursor-pointer'>
            <i className="fa-solid fa-magnifying-glass text-2xl text-cyan-400 dark:text-secondaryColor"></i>
            </button>
      </form>
  )
}

export default SearchUser
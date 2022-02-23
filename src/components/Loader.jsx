import React from 'react'

import { BounceLoader } from "react-spinners";


const Loader = () => {
  return (
    <div className='w-full flex items-center justify-center mt-10'>
        <BounceLoader color={"cyan"} size={'150px'}/>
    </div>
  )
}

export default Loader
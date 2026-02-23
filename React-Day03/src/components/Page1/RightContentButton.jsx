import React from 'react'
import {MoveRight} from 'lucide-react'
const RightContentButton = () => {
  return (
     <div className='flex justify-between border-t-2 border-gray-300 mt-5 pt-5'>
        <button className='bg-blue-400 rounded-full p-2 font-bold text-1xl'>Saitsfied</button>
        <button className='bg-blue-400 rounded-full p-2'><MoveRight /></button>
    </div>
  )
}

export default RightContentButton
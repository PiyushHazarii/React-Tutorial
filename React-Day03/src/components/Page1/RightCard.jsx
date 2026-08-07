import React from 'react'
import {MoveRight} from 'lucide-react'
import RightCardContent from './RightCardContent'


const RightCard = () => {
  return (
    <div className='h-full flex shrink-0 w-80 bg-gray-500 rounded-4xl overflow-hidden relative'>
        <img className='h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1663047305318-c6debe9f633c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8MHx8fDA%3D" alt='' />
        <RightCardContent />
    </div>
  )
}

export default RightCard
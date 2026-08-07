import React from 'react'
import RightCard from './RightCard'

const RightContent = () => {
  return (
    <div id= "right" className='h-full flex overflow-x-auto flex-nowrap gap-10 p-5 w-2/3'>
      <RightCard />
      <RightCard />
      <RightCard />
      <RightCard />
      <RightCard />
    </div>
  )
}

export default RightContent
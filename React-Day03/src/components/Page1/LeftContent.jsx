import React from 'react'
import LeftContentHero from './LeftContentHero'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col items-start justify-between gap-4 p-6'>
        <LeftContentHero />
        <Arrow />
       
    </div>
  )
}

export default LeftContent
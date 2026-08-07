import React from 'react'
import RightContentButton from './RightContentButton'

const RightCardContent = () => {
  return (
    <div className='absolute h-full w-full top-0 left-0 p-5 flex flex-col justify-between text-white'>
        <h2 className='rounded-full bg-white text-black flex justify-center items-center w-12 h-12 text-1.5xl font-bold'>1</h2>
        <div className='flex flex-col gap-5'>
            <p className='text-1xl leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos numquam quidem voluptatum hic officia illo.</p>
            <RightContentButton />
        </div>
    </div>
  )
}

export default RightCardContent
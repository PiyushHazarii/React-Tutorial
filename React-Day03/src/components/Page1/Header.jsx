import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between py-8 px-18' >
        <h4 className='bg-black text-white px-5 py-3 rounded-full uppercase'>Target Audience</h4>
        <button className='bg-gray-400 text-black px-5 py-3 rounded-full uppercase tracking-widest text-sm'>Digital Banking Button</button>
    </div>
  )
}

export default Header
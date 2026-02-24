import React from 'react'
import {useState} from 'react'

const App = () => {

  const [title, setTitle]= useState("abcd");

  function handleSubmit(e){
    e.preventDefault(); // this will prevent the default behavior of the form which is to refresh the page when submitted
    console.log("Form Submitted by", title)

    setTitle("") // this will clear the input field after submitting the form
  }

  
  return (
    <div>
      <form className='form' onSubmit={(e)=>{
        handleSubmit(e)
      }}>
        <input type="text" placeholder='Enter Your Name' value={title} onChange={(e)=>{
          console.log(e.target.value)
          setTitle(e.target.value)
        }}/>
        <input type="text" placeholder='Enter Your Age'/>
        <button >Submit</button>
      </form>
    </div>
  )
}

export default App
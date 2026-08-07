import React from 'react'

const App = () => {
  function onClick(){
    console.log('clicked')
  }

  function onMouseEnter(){
    console.log('mouse entered')
  }
  const [count, setCounter] = React.useState(0);
  return (
    <div>
      <button onMouseEnter={onMouseEnter} onClick={onClick}>Click me</button>
      <input type="text" placeholder='Enter Name' onChange={()=>{
        console.log("User is typing")
      }} />
      <input type="text" placeholder='Enter Surname' onChange={function(elem){
        console.log(elem)
      }} />
      <button onClick={()=>{
        setCounter(count+1)
      }}>Count={count}</button>
    </div>
  )
}

export default App
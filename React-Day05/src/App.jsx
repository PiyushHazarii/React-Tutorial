import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0);

  const [array, setArray] = useState([1,2,3,4,5]);

  const [objj, setObj] = useState({name:"jogh",age: 20});

     
  function onClickNewButton(){
  setObj(prevObj => ({...prevObj,name:"sanju"}));
  }
  function increase() {
    setNum(num + 1);
    // setNum(num + 1); is asynchronous, so it will not update the value of num immediately.
    console.log(num); // This will log the old value of num, not the updated value. 

    const newArr = [...array];
    newArr.push(3,2);
    setArray(newArr);

    

    // if you will set the num to the setNum as it is then it will re render the component beacuse the 
    // value is same and not changed.
  }

  return (
    <div>
      <button onClick={increase}>Click Me {num} {array} </button>
      <button onClick={onClickNewButton}>Change Name{objj.name}</button>
    </div>
  )
}

export default App
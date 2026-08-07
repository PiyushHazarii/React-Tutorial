import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [data, setData] = useState([]);

  async function getData() {
  const fetchResponse  = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const fetchData = await fetchResponse.json()
  console.log(fetchData); // this will also not work here beacuse .json() method is also async so we have to use await 


  const axiosResponse = await axios.get("https://jsonplaceholder.typicode.com/posts");
  setData(axiosResponse.data)
 }
  return (
    <div>
      <button onClick={getData}>Click Me</button>
      <div>
        {data.map(function(elem, idx){
          return <h3>'hello' {idx+1}</h3>
        })}
      </div>
    </div>
  )
}

export default App
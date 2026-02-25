import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useRef } from "react";


function App() {
      const [count, setCount] = useState(0);
      const prevCount = useRef();

      useEffect(() => {
           prevCount.current = count;
          }, [count]);
      return (
    <>
        <div>
          <h2>Current: {count}</h2>
          <h3>Previous: {prevCount.current}</h3>
          <button onClick={() => setCount(count + 1)}>
            Increase
          </button>
        </div>
    </>
  )
}

export default App

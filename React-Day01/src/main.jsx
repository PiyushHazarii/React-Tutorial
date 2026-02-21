import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// in this create root directly connect to the real dom container 

// createRoot : create root means Create a root container where your React application 
// will be rendered.

//render : - Render the App component inside that root.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

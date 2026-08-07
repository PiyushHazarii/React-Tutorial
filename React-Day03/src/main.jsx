import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Page1  from './components/Page1/page1.jsx'
import Page2  from './components/Page2/page2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page1 />
    <Page2 />
  </StrictMode>,
)

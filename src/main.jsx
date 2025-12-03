// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import App from './Hook.jsx'
// import Router from './Router.jsx'
// import Props from './Props.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <App />
    {/* <Props/> */}
  </BrowserRouter>  
  // </StrictMode>,
)

// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import App from './Hook.jsx'
// import Router from './Router.jsx'
// import Props from './Props.jsx'
// import App from './color.jsx'
// import App from './count.jsx'
// import Form from './Form.jsx'
import { BrowserRouter } from 'react-router-dom'
import Formvalidation from './Formvalidation.jsx'
import Navbar from './Navbarproject.jsx'
// import { Map } from './Map.jsx'
// import App from './tailwind.jsx'




createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    {/* <App /> */}
    {/* <Form/> */}
    {/* <Formvalidation/> */}
    {/* <Props/> */}
    <Navbar/>
    {/* <Map/> */}
    {/* <App/> */}
  </BrowserRouter>  
  // </StrictMode>,
)

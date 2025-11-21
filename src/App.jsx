// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React from "react";
import Navbar from "./Navbar";
import {Footer,Footer2} from "./Footer";
import Homepage from "./Homepage";
import Header from "./Header";
import Clickmebutton from "./Clickmebutton";
import icon from './assets/react.svg'


const App=()=>{

  // javascript {} or return k beech m likhte h
  // let Taresh=()=>{
  //   alert('hello i am taresh')
  // }

  // var age = parseInt(prompt('enter age:'))
  // if (age>=18){
  //   alert('u can vate')
  // }
  // else{
  //   alert("'can't vote")
  // }

  // let a = ()=>{
  //   alert('Welcome to React Header!')
  // }

  // let b = ()=>{
  //   alert('button is clicked')
  // }

  // let age = parseInt(prompt('enter age : '))
  // if (age>=18){
  //   alert('you are adult')
  // }
  // else{
  //   alert('you are minor')
  // }

  // let num = parseInt(prompt('enter no. : '))
  // if (num>0){
  //   alert('Positive')
  // }
  // else if (num==0){
  //   alert('Neutral')
  // }
  // else{
  //   alert('Negative')
  // }
  // let i = 1

  // let snum = for(let i = 1,i<=5,i++){
  //   console.log(i)
  // }

  return(
    <div>
      <Navbar/>
      <img src="vite.svg" alt="" />
      <h1 style={{color:'red'}}>Hello Cybrom</h1>
      <p>of M.p nagar</p>
      {/* <button onClick={Taresh}>Click here</button> */}
      <img src={icon} alt="" />

      <Homepage/>

      <Footer/>
      <Footer2/>
      {/* <button onClick={a}>header</button> */}
      <Header/>
      {/* <h1 onClick={b}><Clickmebutton/></h1> */}
      {/* <button onClick={age}>Check age</button> */}
      <br />
      {/* <button onClick={num}>Check no.</button> */}
      <br />
      {/* <button onClick={snum}>Show Numbers</button>
      <br />
      <button>Count Even Number</button> */}
      
    </div>
  )
}

export default App
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

  return(
    <div>
      <Navbar/>
      <Homepage/>

      <Footer/>
      <Footer2/>
      
      <Header/>
      
      
    </div>
  )
}

export default App
// movie ticket website alloted 
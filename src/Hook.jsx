import React, { useState } from 'react'

export const Hook = () => {
    let [name,setname]=useState('')
    let inputchange=(e)=>{
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.value)
        setname(e.target.value)
    }
    let [cityname,setcity]=useState('')
    let city=(e)=>{
        setcity(e.target.value)
    }
  return (
    <>
    <div>Hook</div>
    Enter name: <input type="text" onChange={inputchange}/>
    <br />
    your name is {name}
    <br /> <br />
    Enter City : <input type="text"onChange={city} />
    city ; {cityname}
    
    </>
    
  )
}

export default Hook
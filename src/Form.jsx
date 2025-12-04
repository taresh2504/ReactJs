import React, { useState } from 'react'

export const Form = () => {
    let [name,setname]=useState('')
    let [email,setemail]=useState('')

    let Handlesubmit=(e)=>{
        e.preventDefault() //stops the form reloading
        alert(name)
        console.log(email)
    }
  return (
    <>
    <div>Form handling</div>
    <form action="" onSubmit={Handlesubmit}>
        enter name : <input type="text" onChange={(e)=>{setname(e.target.value)}} />
        enter email : <input type="text" name="" id="" onChange={(e)=>{setemail(e.target.value)}}/>
        <button type='submit'>save data</button>
    </form>
    </>
  )
}

export default Form

// controlled component = jise react se controlled krte h 
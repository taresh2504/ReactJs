import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export const Form = () => {
    // let [name,setname]=useState('')
    // let [email,setemail]=useState('')

    let navigate = useNavigate()

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
        enter number : <input type="text" name='number' value={form.number} onChange={Handlesubmit}  />
        <button type='submit'>save data</button>

        Navigate('/login')
    </form>
    </>
  )
}

export default Form

// controlled component = jise react se controlled krte h 
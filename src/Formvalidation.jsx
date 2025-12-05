import React from 'react'
import { useState } from 'react'


const Formvalidation = () => {
    let [form,setform]=useState({
        name:"",
        email:""
    });
    let handleclick=(e)=>{
        setform({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    let handlesubmit=(e)=>{
        e.preventDefault();
        console.log("Data",form);
        if(form.name.trim()===""){
            alert("Name is required");
            return;
        }
    }
    
  return (
    <>
    <h1>Hello..</h1>
    <form onSubmit={handlesubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text"  name="name" onChange={handleclick}  />

        <br /> <br />
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" onChange={handleclick} /> <br /> <br />

        <input type="submit" />
    </form>
    </>
  )
}

export default Formvalidation

// react bits library h react ki 

// import React from 'react'
// import React, { useState } from 'react'

// export const Formvalidation = () => {
//     let [form, setform] = useState({
//         name:'',
//         email:'',
//         number:''
//     })

//     let handlechange(e)=>{
//         setform({ ...form,[e.target.name]:e.target.value})
//     }

//     let Handlesubmit=(e)=>{
//         e.preventDefault() // stops the form reloading

//         if(form.name.trim()==''){
//             alert('please enter your name')
//         }
//     }
//   return (
//     <>
//     <div>Formvalidation</div>
//     <form action="" onSubmit={Handlesubmit}>
//         enter name : <input type="text" onChange={(e)=>{setname(e.target.value)}} />
//         enter email : <input type="text" name="" id="" onChange={(e)=>{setemail(e.target.value)}}/>
//         enter number : <input type="text" name='number' value={form.number} onChange={Handlesubmit}  />
//         <button type='submit'>save data</button>
//     </form>
//     </>
//   )
// }

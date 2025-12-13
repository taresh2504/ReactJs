import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Datashow = () => {
  let [data,setdata] = useState([0])
  useEffect(()=>{
    let api = "http://localhost:3000/movie"

    axios.get(api).then((res)=>{
      console.log(res,data)
      setdata(res.data)
    }).catch((err)=>{
      console.log('Error',err);
    })
  },[])
  return (
    <>
    <div>Datashow</div>
    
    </>
  )
}

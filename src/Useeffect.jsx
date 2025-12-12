import React, { useEffect, useState } from 'react'

export const Useeffect = () => {
    let [count,setcount] = useState(0)

    let inc = ()=>{
        setcount(count+1)
    }

    useEffect(()=>{
        console.log('running....')
    },[])
    
  return (
    <>
    <h1>count : {count}</h1>
    <button onClick={inc}>add</button>
    <div>Useeffect</div>
    </>
  )
}

import React from 'react'

export const Arrayofobject = () => {
    let Data = [
        {id:1,name:'taresh',city:'Bhopal'},
        {id:2,name:'naresh',city:'indore'},
        {id:3,name:'krish',city:'lucknow'}
    ]
  return (
    <>
    <div>Arrayofobject</div>
    {Data.map(e)=>(
        <div key={e.id}>
            <h1>{e.name}</h1>
            <p>{e.city}</p>
        </div>
    )}
    </>
  )
}

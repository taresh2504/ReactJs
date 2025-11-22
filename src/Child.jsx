import React from 'react'

const Child = (props) => {
// const Child = ({myname,age}) => {    

  return (
    <>
    <p>This is Child</p>
    {/* <h1>my name is {props.myname}</h1>
    <h1>my age is {props.age}</h1> */}
    {/* <h1>my name is {myname}</h1>
    <h1>my age is {age}</h1> */}
    <h3>Details are {props.mydata.name}</h3>
    </>
  )
}

export default Child

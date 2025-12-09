import React from 'react'

export const Map = () => {
    let MyData = ['taresh','priyesh','krish','tanish']
  return (
    <>
    <div>Map</div>
    <ul>
        {MyData.map((e,i)=>(
            <li Key={i}>{e}</li>
        ))}
    </ul>
    </>
  )
}

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

    useEffect(()=>{
      FetchData()
    })

  },[])

  let DataDelete=(id)=>{

    let api = `http://localhost:3000/movie/${id}`
    axios.delete(api).then(()=>{
      alert('Booking cancelled')
      FetchData()
    })

  }
  return (
    <>
    <h1>Data show Page</h1>
    <table border={2}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Aadhar</th>
          <th>City</th>
          <th>Checkin</th>
          <th>Checkout</th>
          <th>People</th>
          <th>Total</th>
          <th>Canacel</th>
        </tr>
      </thead>

      <tbody>
        { data.map((e)=>(
          
          <tr>
            <td>{e.name}</td>
            <td>{e.age}</td>
            <td>{e.aadharno}</td>
            <td>{e.city}</td>
            <td>{e.checkin}</td>
            <td>{e.checkout}</td>
            <td>{e.people}</td>
            <td>{e.total}</td>
            <td onClick={()=>{DataDelete(e.id)}}>Delete</td>
          </tr>
        ))
        }
      </tbody>
    </table>
    </>
  )
}





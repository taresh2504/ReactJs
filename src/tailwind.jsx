import React from 'react'
import './tailwind.css'
import img1 from './assets/react.svg'
import { IoHome } from "react-icons/io5";

const App = () => {
  return (
    <>
    {/* <div className='text-red-500 border border-amber-950 w-50 '>
      hey i am taresh
    </div>   */}
    {
      // 0-640=>by default (mobile view)
      // 640-768=> sm (Tablet view)
      // 768-1024=> md(Laptop view)
      // 1024+ => lg (Deskstop view)
    }
      <div className='border w-full h-16 flex justify-between items-center px-3'>
        <img src="{img1}" alt="" />
        <ul className='flex gap-5'>
        <li> <IoHome /> Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
        </ul>
        <button className='border bg-amber-300 rounded-2xl p-2'>Download</button>
      </div>
    </>
  )
}

export default App

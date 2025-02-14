import React from 'react'
import Navbar from '../pages/UI/navbar'

interface Props{
    children: React.ReactNode
}
const Frame = ({children}:Props) => {
  return (
    <div className=" bg-black min-h-screen">
        <Navbar/>
        {children}
      
    </div>
  )
}

export default Frame

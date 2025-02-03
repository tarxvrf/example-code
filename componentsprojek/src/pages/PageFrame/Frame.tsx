import React, { FC } from 'react'
import Navbar from '../UI/Navbar';

interface props{
    children: React.ReactNode
}
const Frame = ({children}:props) => {
  return (
    <div >
        <Navbar/>
        <div className='flex justify-center items-center min-h-screen'>
          {children} 
        </div>
             
    </div>
  )
}

export default Frame

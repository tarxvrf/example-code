import React from 'react'
import Login from './UI/Login'
import Register from './UI/Register'
import Navbar from './UI/Navbar'
import style from '@/styles/textgradient.module.css'
import { popins } from './UI/fonts/fonts'

const Home = () => {
 
  return (
    <div>
      {/*<Login/>*/}
      {/*<Register/>*/}
     <div className={style.gradienttext}><span className={`${popins.className}`}>Agus salim</span></div>
      
    </div>
  )
}

export default Home

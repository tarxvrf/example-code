import { signIn } from 'next-auth/react'
import React from 'react'

const index = () => {
  // const handlelogin=(e)=>{
   // e.preventDefault()
     // signIn('google',{
     //    callbackUrl: '/dashboard'
     // })
  // }
  
   return (
    <div>
      <h1>Ini Halaman Login</h1>
      <button onClick={()=>signIn('google',{callbackUrl:'/dashboard'})} className='btn btn-info btn-sm'>Sign in with Google</button>
    </div>
  )
}

export default index

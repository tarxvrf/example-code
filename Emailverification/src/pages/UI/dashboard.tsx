

import { signIn } from 'next-auth/react'
import React, { useState } from 'react'
import { MdOutlineMail } from 'react-icons/md'

const Dashboard = () => {
  const [email,setemail]= useState('')
  const [password,setpassword]= useState('')
  const [error,seterror]= useState('')


  const  handlesignup= async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    event.preventDefault()
  if((email && password !== '')){
  const rest=  await fetch('yourdomain/api/hello',{
      body: JSON.stringify({ email, password }),
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',        
      }
    })  

   if(rest.ok && (email && password !== '')){
    const rest=await signIn('email',{
      redirect:false,
      email: email,           
    }) 
    if(!rest) return null
    if(rest.error){
      seterror(rest.error)
    }else{
      await fetch('https://demo.tulus-dev.my.id/api/sendmail',{
        body: JSON.stringify({ email}),
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',        
        }
      }) 
    }

   }
   

   
    }else{
      seterror('email dan / password tidak boleh kosong ')
    }    
  }

  return (
    <div className='flex justify-center items-center h-[500px] '>
      <form className='flex flex-col gap-3  max-w-md'>
        {error && <p className='text-red-500'>{error}</p>}
        <label className='input flex items-center gap-2 '>
        <MdOutlineMail/>
        <input type="text" placeholder='@email' onChange={(e)=>setemail(e.target.value)} required/>       
        </label>
        <label className='input flex items-center gap-2 '>
        <MdOutlineMail/>
        <input type="password" placeholder='password' onChange={(e)=>setpassword(e.target.value)}/>       
        </label>
        <button onClick={handlesignup} className='btn btn-sm btn-info'>kirim</button>

      </form>
    </div>
  )
}

export default Dashboard

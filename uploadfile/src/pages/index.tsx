import React, { useState } from 'react'

const index = () => {
 
  const handlesub= async(e: React.FormEvent)=>{
    e.preventDefault()
    const tag = e.target
    const formData = new FormData(tag as HTMLFormElement)   
    const ff = formData.get('file')
    console.log(ff)
    await fetch('/api/upload',{
      method:'POST',
      body:ff
    })



  }


  return (
    <div className='flex justify-center items-center min-h-screen'>
      <form onSubmit={handlesub}>
      <input type="file" name="file"  />
        <button type='submit'>kirim</button>
      </form>
    </div>
  )
}

export default index

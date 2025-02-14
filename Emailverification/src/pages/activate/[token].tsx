import { useRouter } from 'next/router'
import React, { useEffect } from 'react'


const Activate = () => {
  const router = useRouter()
  const {token} = router.query
  
  useEffect(()=>{   
   const verifytoken = async () => {
    await fetch(`https://demo.tulus-dev.my.id/api/activate/token?token=${token}`)
   }
   
   verifytoken()
  },[token])
 
  return (
    <div>
      halaman activate
    </div>
  )
}

export default Activate

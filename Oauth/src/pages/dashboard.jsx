import React from 'react'
import {signOut, useSession} from 'next-auth/react'



const dashboard = () => {
  const {data:session} = useSession()
  if(!session) return <div>Not logged in</div>
  

  return (
    <div>
      {session ?(<p>{session.user.name}</p>):(<p>tidak terdaftar</p>)}
            <br />

      <button className='btn btn-error btn-xs' onClick={()=>signOut({callbackUrl:'/'})}>logout</button>
    </div>   
  )
}

export default dashboard

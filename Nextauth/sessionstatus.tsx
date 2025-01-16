import { signIn,signOut, useSession } from "next-auth/react";

import React from 'react'

const Dashboard = () => {
    const {data:session}=useSession()
  return (
    <div>
      {session ?(<div>selamat {session.user?.name}  <button onClick={() => signOut()}>Log Out</button></div>):(<div><p>You are not logged in.</p>
        <button onClick={() => signIn()}>Log In</button></div>)}
    </div>
  )
}

export default Dashboard


import { PrismaClient } from '@prisma/client'
import { console } from 'inspector'
import { NextApiRequest } from 'next'
import React from 'react'

const prisma = new PrismaClient()
export default async function handler(req: NextApiRequest) {
  const {token} = req.query

  try{
      if(!token)return null
      if(token){
        const aktiva= await prisma.verificationToken.findUnique({
          where: {
            token: token as string            
          }     
        })
        if(!aktiva)return null
        await prisma.verificationToken.update({
          where: {
            token: aktiva.token
          },data:{
            status:true,
            identifier:'aktif'+aktiva.identifier
          }
        })
      await prisma.user.update({
          where: {
            email: aktiva.identifier
          },data:{
            email:'aktif'+aktiva.identifier
          }
        })
      }
  }catch(error){
    console.log(error)
  }
  



  return (
    <div>
      
    </div>
  )
}





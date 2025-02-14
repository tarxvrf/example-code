// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient()
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if(req.method ==='GET'){
    res.status(200).json({message: 'Hello from Next.js API route!'})
  }
  if(req.method === 'POST'){
    const {email,password}= req.body
    await prisma.user.create(
      {
        data: {
          email,
          password
        }
      }
    )
    res.status(201).json({message: 'User created successfully'})
  }
}


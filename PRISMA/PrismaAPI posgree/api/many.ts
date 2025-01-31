import prisma from "@/libs/prismaconnect";
import { NextApiRequest,NextApiResponse } from "next";


export const GET=async(req:NextApiRequest,res:NextApiResponse)=>{
  const ambil = await prisma.user.findMany()
  try{
    if(res.status(304)){
        return res.status(304).json({message:"Not Modified"})
    }
    if(!ambil){
        return  res.status(404).json({message:'data tidak ada'})
      }else{
        return res.status(200).json(ambil)
      }
  }catch(error){
    return res.status(500).json({message:'Insternal server eror'})
  }
}
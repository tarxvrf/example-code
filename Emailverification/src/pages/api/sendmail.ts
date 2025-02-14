import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();
export default async function sendMail(req:NextApiRequest , res:NextApiResponse) {
const {email}= req.body
    if(req.method === 'POST'){      
        const tokenverf = await prisma.verificationToken.findFirst({
            where:{
                identifier:email
            }
        })        
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth:{
                user:process.env.SMTP_USER,
                pass:process.env.SMTP_PASS                
            }
        })
        const mailOptions = {            
            from: process.env.SMTP_USER,            
            to: email,
            subject: "Confirmation email after SignUp ",                       
            html:  `<p>ini adalah pengiriman email</p> link:yourdomain/activate/${tokenverf?.token}`
        }

        try{
            await transporter.sendMail(mailOptions)
            res.status(200).json({message:'Email sent successfully'})
        }catch(error){
            res.json({message:error})
        }

    }else{
        res.status(405).json({message:'Method not allowed'})
    }


}

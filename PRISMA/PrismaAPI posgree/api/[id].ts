import { NextApiRequest,NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { json } from "stream/consumers";
import { error } from "console";

const prisma = new PrismaClient()
 const handler = async (req: NextApiRequest, res: NextApiResponse) => {    
    const { name, email } = req.body;
    
    // POST DATA
    if (req.method === 'POST') {        
        try {
            // Create a new user in the database
            const data = await prisma.user.create({
                data: {
                    name,
                    email,
                },
            });
            // Send a successful response back
            res.status(201).json(data); // Status 201 for created resource
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to create user" }); // Internal server error
        }
    } 

   //GET DATA FIND UserID
   if(req.method === 'GET'){
    const {id}= req.query
   const data = await prisma.user.findMany()
   const ambil =data.find(item=>item.id === Number(id))
   try{
    if(Number(id) == ambil?.id){
        return res.json(ambil)
     }
     if(id === 'handler' && Number(id) !== ambil?.id){
        return res.json(data)
     }
         
     if(Number(id) !==ambil?.id ){
        return res.status(404).json({error:'usernot fond'})
     }
     
    
   }catch(error){
     return res.status(500).json({message:'Insternal server eror'})
   }
}
     

   //DELETE DATA
    if(req.method === 'DELETE'){  
        const id = req.query.id;
        try{           
           const data = await prisma.user.delete({
            where:{
             id:Number(id)
            }})
            return res.status(200).json(data)
        }catch(error){
            return res.status(500).json({message:id})
        }
    }

    //UPDATE DATA
    if(req.method ==='PATCH'){
        try{
            const id = req.query.id;
            const data = await prisma.user.update({
                where:{
                id:Number(id)
                },
                data:{
                    name,
                    email
                }
            })
            return res.status(200).json(data)
        }catch(error){
            return res.status(500).json({error})
        }
    }


};
export default handler
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { error } from "console";
import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";

const prisma = new PrismaClient()
export default NextAuth({
    providers: [
        EmailProvider({        
        async sendVerificationRequest({
          identifier,
          token,          
        }) {
          const uss = await prisma.verificationToken.findFirst({
            where: {
              identifier: identifier,
            }            
          })
          if(uss?.token !== token) {
            return error(401, "Invalid token");
          }
         
        },
      }),
    ],
    adapter: PrismaAdapter(prisma),  // Set up Prisma adapter    
    session: {
      strategy:'jwt',
    },    
    callbacks: {           
       async jwt({ token,user }) {
        if(user){
            token.id=user.id
            token.email=user.email
        }
        return token
       },
       async session({ session, token }) {
            if(session.user){
                session.user.email=token.email
            }
            return session
       },
     
    },
    secret: process.env.NEXTAUTH_SECRET,  // Secret key for JWT signin
  })
  
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    
     providers:[
        CredentialsProvider({
            name:"credential",
            credentials:{
                username:{label:'Username',type:'text'},
                password:{label:'Password',type:'password'},
            },
             async authorize(credentials){
                if(!credentials?.email || !credentials.password){
                    return null
                }
                const user = await prisma.user.findUnique({where:{email:credentials.email}});
                if(!user){
                    return null
                }else{
                    return user
                }
            }
            }
        )
     ],
     callbacks:{
        async jwt({token,user}){
            if(user){                
                token.email = user.name
            }
            return token
        },
        async session({session,token}){
            if(token){
                session.user.id = token.id;                
                session.user.name = token.name;
              }
              return session;
        }
     },
     session:{
        strategy:'jwt'
     }
     
})

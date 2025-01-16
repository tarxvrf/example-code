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
            async authorize(credentials) {
                if(credentials?.username === "admin" && credentials?.password === "admin"){
                    return {id:1,name:"admin"};
                }
                return null;
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
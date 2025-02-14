import NextAuth from "next-auth";
import google from "./google";


export default NextAuth({
    providers: [
     google      
    ],
    secret: process.env.NEXTAUTH_SECRET,  // Optional, for security
    callbacks: {
      async jwt({ token, account }) {
        // Persist the OAuth access token to the JWT
        if (account) {
          token.accessToken = account.access_token;
        }
        return token;
      },
      async session({ session, token }) {
        // Attach the token to the session
        session.accessToken = token.accessToken;
        return session;
      },
    },
    pages: {
      signIn: '/',  // Optional: You can customize the sign-in page
    },
    
  });
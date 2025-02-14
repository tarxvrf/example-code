
import GoogleProvider from 'next-auth/providers/google'

export default GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,  // Your Google client ID
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,  // Your Google client secret
})


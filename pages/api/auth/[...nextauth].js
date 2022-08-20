import NextAuth from 'next-auth';
//import Providers from 'next-auth/providers';
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

export default NextAuth({
    session: {
        jwt: true
    },
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
        
            async authorize(credentials) {
                //console.log(credentials, credentials);
                //console.log(req, req);
                // Add logic here to look up the user from the credentials supplied
                const client = await connectToDatabase();

                const usersCollection = client.db().collection('users');

                const user = await usersCollection.findOne({ email: credentials.email });

                client.close();

                if (user) {
                    const isValid = await verifyPassword(credentials.password, user.password);
                    if (isValid) {
                        // Any object returned will be saved in `user` property of the JWT
                        return { email: user.email };
                    }
                    else {
                        throw new Error('Could not log you in!');
                    }
                    
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    //return null;

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                    throw new Error('No user found!');
                }
            }
        })
    ]
});
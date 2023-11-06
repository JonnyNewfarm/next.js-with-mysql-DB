import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import  CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';


const prisma = new PrismaClient()

export const authOption: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
        name: "credentials",
        credentials: {
            email: {label: 'Email', type: 'email', placeholder:'Email' },
            password: {label: 'Password', type: 'password', placeholder:'Password' }
        },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) return null;

        const user= await prisma.user.findUnique({where: {email:credentials.email}})

        if (!user) return null;

       const passwordsmatch=  await bcrypt.compare(credentials.password, user.hashedPassword!);
       return passwordsmatch ? user : null;




       },


    }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!

        })
    ],
    session: {
    strategy: 'jwt'

    }
  
};
const handler = NextAuth(authOption);

export { handler as GET, handler as POST }
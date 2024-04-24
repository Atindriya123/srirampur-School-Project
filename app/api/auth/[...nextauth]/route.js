import { authOptions } from "@/utils/authOptions";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};
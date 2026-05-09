// src/lib/auth.ts
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "MOCK_CLIENT_ID",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "MOCK_CLIENT_SECRET",
    }),
    CredentialsProvider({
      name: 'Email',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (credentials?.email && credentials?.password) {
          // Accept any login for testing
          return {
            id: '1',
            name: credentials.email.split('@')[0],
            email: credentials.email,
            image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${credentials.email}`
          };
        }
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        // Extend session user to include id if needed
        (session.user as any).id = token.id as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/', // Or a dedicated signin page if we make one
  },
};

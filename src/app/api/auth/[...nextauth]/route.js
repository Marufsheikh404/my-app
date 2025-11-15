// src/app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "your name" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // Example: verify credentials directly here (recommended)
                // Replace this with your DB lookup / password check
                if (!credentials) return null;
                const { username, password } = credentials;
                if (username === "demo" && password === "demo") {
                    return { id: 1, name: "Demo User", email: "demo@example.com" };
                }
                return null;
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    // callbacks, session, pages ইত্যাদি লাগলে এখানে যোগ করো
};

const handler = NextAuth(authOptions);
// IMPORTANT: named exports for App Router HTTP methods
export { handler as GET, handler as POST };

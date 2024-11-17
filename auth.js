import connectDB from "@/lib/connectDB";
import { userModal } from "@/lib/models/UserModal";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

async function handlelogin(obj) {
  await connectDB();
  const user = await userModal.findOne({ email: obj.email });
  if (user) {
    return user;
  } else {
    let newUser = await userModal(obj);
    newUser = await newUser.save();
    return newUser;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        let obj = {
          firstName: profile.given_name,
          lastName: profile.family_name,
          email: profile.email,
          picture: profile.picture,
        };
        const user = await handlelogin(obj);
      }
      return true; // Do different verification for other providers that don't have `email_verified`
    },
    async jwt({ token }) {
      const user = await handlelogin({ email: token.email });
      console.log("user in JWT " , user);
      token.roll  = user.role,
      token._id = user._id  
      // User is available during sign-in
      // token.id = user.id;
      return token;
    },
    session({ session, token }) {
      session.user._id = token._id;
      session.user.role = token.role;
      return session;
    },
  },
});

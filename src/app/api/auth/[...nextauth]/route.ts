import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import { addUser } from '@/service/user';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
    }),
    GithubProvider({
      clientId: process.env.GITHUB_OAUTH_ID || '',
      clientSecret: process.env.GITHUB_OAUTH_SECRET || '',
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async signIn({ user: { id, name, email, image } }) {
      // 로그인하는 순간에 실행된다.
      // session 보다 먼저 실행된다.

      if (!email) return false;

      addUser({
        id,
        name: name || '',
        email,
        image,
        username: email?.split('@')[0] || '',
      });

      return true;
    },
    async session({ session }) {
      /* session 기본 형태 
          => session에 username을 포함시키기 위해 types폴더에 next-auth.d.ts 파일을 생성하여 추가함
        {
          user: {
            name :
            email:
            image: 
          },
          expires:
        } 
      */
      const user = session?.user;
      if (user) {
        session.user = {
          ...user,
          username: user.email?.split('@')[0] || '',
        };
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

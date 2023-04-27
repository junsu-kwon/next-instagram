import NextAuth, { DefaultSession } from 'next-auth';

// 기존 DefaultSession에 username을 확장하는 작업
declare module 'next-auth' {
  interface Session {
    user: {
      username: string;
    } & DefaultSession['user'];
  }
}

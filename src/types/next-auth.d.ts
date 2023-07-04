import { AuthUser } from '@/model/user';

// 기존 DefaultSession에 username을 확장하는 작업
declare module 'next-auth' {
  interface Session {
    user: AuthUser;
  }
}

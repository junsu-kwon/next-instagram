import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { NextResponse } from 'next/server';
import { getPosts } from '@/service/post';

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response('Authentication Error', { status: 401 });
  }
  return getPosts()
    .then((data) => NextResponse.json(data))
    .catch(() => {});
}

export async function POST(req: Request) {}

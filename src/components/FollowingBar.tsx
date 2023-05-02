'use client';

import Link from 'next/link';
import useSWR from 'swr';
import Avatar from './Avatar';
import { PropagateLoader } from 'react-spinners';
import { DetailUser } from '@/model/user';
import ScrollableBar from './ui/ScrollableBar';

export default function FollowingBar() {
  const { data, isLoading: loading, error } = useSWR<DetailUser>('/api/me');
  // const users = data?.following;
  // const users = undefined;
  const users = data?.following && [
    ...data?.following,
    ...data?.following,
    ...data?.following,
    ...data?.following,
  ];

  return (
    <section className="w-full flex justify-center items-center p-3 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[100px] overflow-x-auto">
      {loading ? (
        <PropagateLoader size={8} color="red" />
      ) : (
        <>
          {(!users || users.length === 0) && (
            <p>{`You don't have following`}</p>
          )}

          {users && users.length > 0 && (
            <ScrollableBar>
              {users.map(({ image, username }) => (
                <Link
                  key={username}
                  className="flex flex-col items-center w-20 p-1 hover:scale-105 hover:bg-gray-200 hover:rounded-lg transition-all duration-300"
                  href={`/user/${username}`}
                >
                  <Avatar image={image} highlight />
                  <p className="w-full text-sm text-center text-ellipsis overflow-hidden">
                    {username}
                  </p>
                </Link>
              ))}
            </ScrollableBar>
          )}
        </>
      )}
    </section>
  );
}

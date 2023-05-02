'use client';

import Link from 'next/link';
import useSWR from 'swr';
import Avatar from './Avatar';
import { PropagateLoader } from 'react-spinners';
import { DetailUser } from '@/model/user';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

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
    <section className="w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto">
      {loading ? (
        <PropagateLoader size={8} color="red" />
      ) : (
        <>
          {(!users || users.length === 0) && (
            <p>{`You don't have following`}</p>
          )}
          {users && users.length > 0 && (
            <ul className="w-full flex gap-2">
              {users.map(({ image, username }) => (
                <li key={username}>
                  <Link
                    className="flex flex-col items-center w-20"
                    href={`/user/${username}`}
                  >
                    <Avatar image={image} highlight />
                    <p className="w-full text-sm text-center text-ellipsis overflow-hidden">
                      {username}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </section>
  );
}

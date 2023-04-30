'use client';

import { Suspense } from 'react';
import { PropagateLoader } from 'react-spinners';
import Avatar from './Avatar';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import useSWR from 'swr';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function FollowingBar() {
  const { data, error, isLoading, isValidating } = useSWR('/api/user/me');

  return (
    <Suspense fallback={<PropagateLoader color="#36d7b7" />}>
      <Carousel responsive={responsive}>
        {/* {allUser.map(({ username, image }) => {
          return (
            <Link href={`/user/${username}`} key={username}>
              <Avatar image={image} size="small" highlight />
            </Link>
          );
        })} */}
      </Carousel>
    </Suspense>
  );
}

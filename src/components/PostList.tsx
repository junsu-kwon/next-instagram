'use client';

import { SimplePost } from '@/model/post';
import useSWR from 'swr';
import PostListCard from './PostListCard';
import GridSpinner from './ui/GridSpinner';

export default function PostList() {
  const { data: posts, isLoading: loading } =
    useSWR<SimplePost[]>('/api/posts');

  return (
    <>
      {loading ? (
        <section className="flex justify-center items-center h-full">
          <GridSpinner color="red" />
        </section>
      ) : (
        posts && (
          <section>
            <ul>
              {posts.map((post, index) => (
                <li key={post.id} className="mb-4">
                  <PostListCard post={post} priority={index < 2} />
                </li>
              ))}
            </ul>
          </section>
        )
      )}
    </>
  );
}

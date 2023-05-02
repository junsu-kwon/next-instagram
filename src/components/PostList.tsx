'use client';

import { Post } from '@/model/post';
import { PropagateLoader } from 'react-spinners';
import useSWR from 'swr';

export default function PostList({}) {
  // 1. 포스트 + 회원 정보를 가져오기
  const { data, isLoading: loading, error } = useSWR<Post[]>('/api/posts');
  // 2. 화면에 뿌리기
  console.log(data);
  // return loading ? (
  //   <PropagateLoader size={8} color="red" />
  // ) : (
  //   data?.map((post) => (
  //     <h1 key={post.auther.username}>
  //       {post.auther.username} {post.comments.comment}
  //     </h1>
  //   ))
  // );
}

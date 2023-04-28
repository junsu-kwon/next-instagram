import PostList from '@/components/PostList';
import FollowingBar from '@/components/FollowingBar';
import Profile from '@/components/Profile';

export default function Home() {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col gap-2">
        <FollowingBar />
        <PostList />
      </div>
      <div>
        <Profile />
      </div>
    </div>
  );
}

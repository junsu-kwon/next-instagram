import { User } from './user';

export type Post = {
  auther: User;
  photo: string;
  likes: User[];
  comments: {
    comment: string;
    auther: User[];
  };
};

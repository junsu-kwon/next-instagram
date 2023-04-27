import { client } from './sanity';

export type User = {
  id: string;
  username: string;
  email: string;
  name: string;
  image?: string | null;
};

export async function addUser({ id, username, email, name, image }: User) {
  return client.createIfNotExists({
    _id: id,
    _type: 'user',
    username,
    email,
    name,
    image,
    following: [],
    followers: [],
    bookmarks: [],
  });
}

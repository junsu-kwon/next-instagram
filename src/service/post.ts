import { client } from './sanity';

export async function getPosts() {
  return client.fetch(
    `*[_type == "post" && author._ref in *[_type=="user"]._id ]{...}`,
  );
}

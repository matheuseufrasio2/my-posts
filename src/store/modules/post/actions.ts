import { Post } from "types/Post";

export function updatePosts(posts: Post[]) {
  return {
    type: "UPDATE_POSTS",
    payload: {
      posts,
    },
  };
}

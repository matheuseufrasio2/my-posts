import type { GetStaticProps } from "next";
import api from "services/api";
import { Post } from "types/Post";

interface IHomeProps {
  posts: Post[];
}

export default function Home({ posts }: IHomeProps) {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <br />
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("posts");

  return {
    props: {
      posts: data,
    },
  };
};

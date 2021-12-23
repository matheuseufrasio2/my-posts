import type { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import api from "services/api";
import { Post } from "types/Post";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface IPostsProps {
  post: Post;
}

export default function Home({ post }: IPostsProps) {
  return (
    <div>
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get("posts");
  const posts = response.data;

  const paths = posts.map((post: Post) => {
    return {
      params: {
        slug: String(post.id),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const { data } = await api.get("posts");

  const post = data.find((post: Post) => post.id === Number(slug));

  return {
    props: {
      post,
    },
  };
};

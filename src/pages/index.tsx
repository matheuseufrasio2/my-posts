import { PostCard } from "components/PostCard";
import type { GetStaticProps } from "next";
import api from "services/api";
import { Container, Content } from "styles/pages/home";
import { Post } from "types/Post";

interface IHomeProps {
  posts: Post[];
}

export default function Home({ posts }: IHomeProps) {
  return (
    <Container>
      <Content>
        <ul>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          ))}
        </ul>
      </Content>
    </Container>
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

import { useState } from "react";

import { PostCard } from "components/PostCard";
import type { GetStaticProps } from "next";
import api from "services/api";
import { Container, Content } from "styles/pages/home";
import { Post } from "types/Post";
import { Pagination } from "components/Pagination";

interface IHomeProps {
  posts: Post[];
}

export default function Home({ posts }: IHomeProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const indexLastPost = currentPage * postsPerPage;
  const indexFirstPost = indexLastPost - postsPerPage;
  const currentPosts = posts.slice(indexFirstPost, indexLastPost);

  function paginate(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  return (
    <Container>
      <Content>
        <ul>
          {currentPosts.map((post) => (
            <PostCard key={post.id} id={post.id} title={post.title} />
          ))}
        </ul>
      </Content>
      <Pagination
        currentPage={currentPage}
        paginate={paginate}
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
      />
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

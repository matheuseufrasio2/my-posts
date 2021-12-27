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
  const [userId, setUserId] = useState(0);
  const [postsPerPage] = useState(4);

  const indexLastPost = currentPage * postsPerPage;
  const indexFirstPost = indexLastPost - postsPerPage;

  const currentPosts = () => {
    let currentPosts = posts;
    if (userId) {
      currentPosts = currentPosts.filter((post) => post.userId === userId);
    }
    return {
      slicedPosts: currentPosts.slice(indexFirstPost, indexLastPost),
      currentPosts,
    };
  };

  function paginate(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  const postsUserId = posts.reduce((acc: number[], next) => {
    if (!acc.includes(next.userId)) {
      acc.push(next.userId);
    }

    return acc;
  }, []);

  return (
    <Container>
      <select
        onChange={(event) => setUserId(Number(event.target.value))}
        name="userId"
        id="userId"
      >
        <option value="0"></option>
        {postsUserId.map((postUserId) => (
          <option key={postUserId} value={postUserId}>
            {postUserId}
          </option>
        ))}
      </select>
      <Content>
        <ul>
          {currentPosts().slicedPosts.map((post) => (
            <PostCard key={post.id} id={post.id} title={post.title} />
          ))}
        </ul>
      </Content>
      <Pagination
        currentPage={currentPage}
        paginate={paginate}
        postsPerPage={postsPerPage}
        totalPosts={currentPosts().currentPosts.length}
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
    revalidate: 60 * 60 * 24,
  };
};

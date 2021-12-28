import { useEffect, useState } from "react";

import { PostCard } from "components/PostCard";
import api from "services/api";
import { Container, Content } from "styles/pages/home";
import { Post } from "types/Post";
import { Pagination } from "components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "store";
import { updatePosts } from "store/modules/post/actions";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [userId, setUserId] = useState(0);
  const postsPerPage = 4;

  const dispatch = useDispatch();
  const posts = useSelector<IState, Post[]>((state) => state.posts.items);

  useEffect(() => {
    async function loadData() {
      const response = await api.get("posts");

      dispatch(updatePosts(response.data));
      console.log("passei aqui de novo");
    }

    if (posts.length === 0) {
      loadData();
    }
  }, [posts.length, dispatch]);

  const indexLastPost = currentPage * postsPerPage;
  const indexFirstPost = indexLastPost - postsPerPage;

  function paginate(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  const currentPosts = () => {
    let currentPosts = posts;
    if (userId) {
      currentPosts = currentPosts?.filter((post) => post.userId === userId);
    }
    return {
      slicedPosts: currentPosts?.slice(indexFirstPost, indexLastPost),
      currentPosts,
    };
  };

  const postsUserId =
    posts &&
    posts.reduce((acc: number[], next) => {
      if (!acc.includes(next.userId)) {
        acc.push(next.userId);
      }

      return acc;
    }, []);

  return (
    <Container>
      <div className="container-select">
        <select
          onChange={(event) => setUserId(Number(event.target.value))}
          name="userId"
          id="userId"
        >
          <option value="0">Select per user</option>
          {postsUserId?.map((postUserId) => (
            <option key={postUserId} value={postUserId}>
              {postUserId}
            </option>
          ))}
        </select>
      </div>
      <Content>
        <ul>
          {currentPosts().slicedPosts?.map((post) => (
            <PostCard key={post.id} id={post.id} title={post.title} />
          ))}
        </ul>
      </Content>
      <Pagination
        currentPage={currentPage}
        paginate={paginate}
        postsPerPage={postsPerPage}
        totalPosts={currentPosts().currentPosts?.length}
      />
    </Container>
  );
}

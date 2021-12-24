import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import { ParsedUrlQuery } from "querystring";
import api from "services/api";
import { Container, Content, Suggestions } from "styles/pages/post";
import { Post as PostType } from "types/Post";
import { motion } from "framer-motion";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface IPostsProps {
  post: PostType;
  postSuggestions: PostType[];
}

export default function Post({ post, postSuggestions }: IPostsProps) {
  return (
    <Container>
      <Content>
        <div>
          <Link href="/" passHref>
            <button>
              <MdArrowBack /> Voltar
            </button>
          </Link>
        </div>
        <motion.article
          animate={{
            y: [-50, 0],
            opacity: [0, 1],
          }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </motion.article>
        <Suggestions
          as={motion.li}
          animate={{
            y: [50, 0],
            opacity: [0, 1],
          }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          {postSuggestions &&
            postSuggestions.map((post) => (
              <li key={post.id}>
                <Link href={`/posts/${post.id}`}>
                  <a>
                    <h2>{post.title}</h2>
                    <p>Post number: {post.id}</p>
                  </a>
                </Link>
              </li>
            ))}
        </Suggestions>
      </Content>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get("posts");
  const posts = response.data;

  const paths = posts.map((post: PostType) => {
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

  const post = data.find((post: PostType) => post.id === Number(slug));

  const indexOfSuggestions = [];
  while (indexOfSuggestions.length < 4) {
    const r = Math.floor(Math.random() * 100) + 1;
    if (indexOfSuggestions.indexOf(r) === -1) indexOfSuggestions.push(r);
  }

  const postSuggestions = [
    data[indexOfSuggestions[0]],
    data[indexOfSuggestions[1]],
    data[indexOfSuggestions[2]],
    data[indexOfSuggestions[3]],
  ];

  return {
    props: {
      post,
      postSuggestions,
    },
  };
};

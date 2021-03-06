import { motion } from "framer-motion";
import Link from "next/link";

import { Container } from "./styles";

interface PostCardProps {
  id: number;
  title: string;
}

export function PostCard({ id, title }: PostCardProps) {
  return (
    <Container
      as={motion.li}
      animate={{
        x: [-50, 0],
        opacity: [0, 1],
      }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <Link href={`/posts/${id}`}>
        <a>
          <h1>{title}</h1>
          <p>Post number: {id}</p>
        </a>
      </Link>
    </Container>
  );
}

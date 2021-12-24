import { motion } from "framer-motion";
import Link from "next/link";

import { Container } from "./styles";

interface PostCardProps {
  id: number;
  title: string;
}

export function PostCard({ id, title }: PostCardProps) {
  return (
    <Container as={motion.li} whileHover={{ scale: 1.01 }}>
      <Link href={`/posts/${id}`}>
        <a>
          <h1>{title}</h1>
        </a>
      </Link>
    </Container>
  );
}

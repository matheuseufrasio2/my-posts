import Link from "next/link";

import { Container } from "./styles";

interface PostCardProps {
  id: number;
  title: string;
  body: string;
}

export function PostCard({ id, title, body }: PostCardProps) {
  return (
    <Container>
      <Link href={`/posts/${id}`}>
        <a>
          <h1>{title}</h1>
          <p>{body}</p>
        </a>
      </Link>
    </Container>
  );
}

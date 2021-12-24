import React from "react";
import { RiCopyrightLine } from "react-icons/ri";

import { Container, Content } from "./styles";

export function Footer() {
  return (
    <Container>
      <Content>
        My Posts <RiCopyrightLine /> All rights reserved -{" "}
        {new Date().getFullYear()}
      </Content>
    </Container>
  );
}

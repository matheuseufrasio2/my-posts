import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1140px;
  padding: 30px 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    list-style: none;
    width: 100%;
    max-width: 770px;
  }
`;

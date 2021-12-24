import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 120px);
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  height: calc(100vh - 120px);
  width: 100%;
  max-width: 1140px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 30px 30px;

  > div {
    width: 100%;

    button {
      display: flex;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.primary};
      border: none;
      cursor: pointer;
      font-size: 2rem;
      padding: 12px;
      border-radius: 5px;
      transition: all 0.2s;

      &:hover {
        background-color: ${({ theme }) => shade(0.6, theme.colors.primary)};
        color: #fff;
      }
    }
  }

  article {
    > h2 {
      margin: 3rem 0;
      font-size: 4.5rem;
      text-align: center;
    }

    > p {
      margin: 3rem 0;
      font-size: 2rem;
      text-align: center;
    }
  }
`;

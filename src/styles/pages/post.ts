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

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary};
  }

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

export const Suggestions = styled.ul`
  margin-top: auto;
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  > li {
    background-color: ${({ theme }) => theme.colors.primary};
    width: 23%;
    height: 200px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 5px;

    @media (max-width: 768px) {
      width: 100%;
      height: 100px;

      & + li {
        margin-top: 8px;
      }
    }

    > a {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 12px;
      transition: all 0.2s;

      > h2 {
        text-align: center;
      }

      &:hover {
        filter: brightness(0.1);
      }
    }
  }
`;

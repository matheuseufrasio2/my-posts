import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.ul`
  display: flex;
  list-style: none;
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.background};

  height: 60px;
  width: 100%;
  max-width: 770px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${({ theme }) => theme.colors.secundary};

  @media (max-width: 900px) {
    padding: 0 38px;
  }

  > p {
    font-size: 2rem;
    margin: 0 10px;
    color: #0071bc;
  }

  > li {
    width: 30px;
    height: 30px;
    background-color: ${({ theme }) => shade(0.75, theme.colors.primary)};

    .isCurrentPage {
      background-color: ${({ theme }) => shade(0.1, theme.colors.primary)};
    }

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 5px;

    & + li {
      margin-left: 2px;
    }

    > a {
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => shade(0.75, theme.colors.primary)};

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 5px;

      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background-color: ${({ theme }) => shade(0.1, theme.colors.primary)};
      }
    }
  }
`;

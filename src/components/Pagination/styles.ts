import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.ul`
  display: flex;
  list-style: none;
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.background};

  height: 60px;

  /* background-color: #e4e4e4; */
  margin-top: auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

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

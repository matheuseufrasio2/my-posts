import styled from "styled-components";

export const Container = styled.li`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 12px;

  a {
    display: flex;
    flex-direction: column;

    padding: 30px;
    border-radius: 12px;
    height: 100%;
    width: 100%;
    min-height: 130px;

    > h1 {
      margin-bottom: 15px;
    }
  }

  & + li {
    margin-top: 45px;
  }
`;

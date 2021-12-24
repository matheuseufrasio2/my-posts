import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - 180px);
  /* max-width: 1140px; */
  padding: 30px 30px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary};
  }

  ul {
    list-style: none;
    width: 100%;
    max-width: 770px;
  }
`;

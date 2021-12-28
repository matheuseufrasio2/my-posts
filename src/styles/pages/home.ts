import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  .container-select {
    height: 60px;

    width: 100%;
    max-width: 770px;

    @media (max-width: 1000px) {
      padding: 0 38px;
    }

    display: flex;
    align-items: center;
    justify-content: flex-end;

    > select {
      width: 20%;
      height: 25px;
      border: 1px solid #0071bc;
      border-radius: 5px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - 240px);
  /* max-width: 1140px; */
  padding: 0 30px;

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

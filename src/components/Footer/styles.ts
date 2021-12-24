import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  max-width: 1140px;

  svg {
    margin: 0 8px;
  }
`;

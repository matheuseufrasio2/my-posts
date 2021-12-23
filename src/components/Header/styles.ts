import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  max-width: 1140px;
`;

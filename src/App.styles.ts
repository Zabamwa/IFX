import styled from "styled-components";

export const Container = styled.div<{ $gap?: string; $direction?: string }>`
  display: flex;
  gap: ${({ $gap }) => $gap};
  flex-direction: ${({ $direction }) => $direction ?? "row"};
  align-items: center;
  padding: 30px;
`;

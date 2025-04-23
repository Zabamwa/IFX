import styled, { css } from "styled-components";

export const CardContainer = styled.div<{
  $showDetails?: boolean;
  $theme: "dark" | "light";
}>`
  display: flex;
  max-width: 600px;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: ${({ $theme }) => ($theme === "dark" ? "white" : "black")};
  border-radius: 15px;
  border: 2px solid ${({ $theme }) => ($theme === "dark" ? "white" : "black")};
  padding: 12px;
  transition: 0.2s;
`;

export const CardTitle = styled.h2<{ $theme: "dark" | "light" }>`
  font-size: 1.5rem;
  color: ${({ $theme }) => ($theme === "dark" ? "black" : "white")};
  margin: 0;
`;

export const CardText = styled.p<{ $theme: "dark" | "light" }>`
  font-size: 1rem;
  color: ${({ $theme }) => ($theme === "dark" ? "black" : "white")};
  margin: 0;
`;

export const CardTextDetail = styled.p<{ $theme: "dark" | "light" }>`
  font-size: 0.7rem;
  color: ${({ $theme }) => ($theme === "dark" ? "black" : "white")};
  margin: 0;
  font-weight: bold;
  & span {
    font-weight: normal;
  }
`;

export const AuthorData = styled.p<{ $theme: "dark" | "light" }>`
  font-size: 0.7rem;
  color: ${({ $theme }) => ($theme === "dark" ? "black" : "white")};
  margin: 0;
  font-weight: bold;
  text-decoration: underline;
`;

export const FlexContainer = styled.div<{
  $direction?: string;
  $justify?: string;
  $marginTop?: string;
  $rwd?: boolean;
  $gap?: string;
}>`
  display: flex;
  justify-content: ${({ $justify }) => $justify};
  gap: ${({ $gap }) => $gap};
  width: 100%;
  flex-direction: ${({ $direction }) => $direction};
  margin-top: ${({ $marginTop }) => $marginTop};
  ${({ $rwd }) =>
    $rwd &&
    css`
      @media screen and (max-width: 480px) {
        flex-direction: column;
        gap: 8px;
      }
    `};
`;

export const CardInfo = styled.p`
  font-size: 0.7rem;
  margin: 0;
  font-weight: bold;
  text-decoration: underline;
  color: blue;
  cursor: pointer;
  &:hover {
    color: purple;
  }
`;

export const DetailsWrapper = styled.div<{ $expanded: boolean }>`
  overflow: hidden;
  max-height: ${({ $expanded }) => ($expanded ? "1000px" : "0")};
  opacity: ${({ $expanded }) => ($expanded ? 1 : 0)};
  transition: 0.4s;
`;

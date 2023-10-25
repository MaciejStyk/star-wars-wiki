import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

interface IProps {
  isBold: boolean;
}

export const Link = styled(RouterLink)<IProps>`
  text-decoration: none;
  display: flex;
  flex-direction: inherit;
  align-items: center;
  cursor: pointer;
  color: inherit;
  font-weight: ${({ isBold }) => (isBold ? "600" : "400")};
`;

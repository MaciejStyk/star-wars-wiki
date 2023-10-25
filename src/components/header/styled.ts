import styled from "styled-components";

import { HEADER_SIZE } from "const";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${HEADER_SIZE}px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.lightGray};
  display: flex;
  justify-content: center;
  box-shadow: 0px 12px 20px 0px rgba(145, 158, 171, 0.18);
`;

export const Wrapper = styled.div`
  width: 85%;
  max-width: 600px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  @media (min-width: 350px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 450px) {
    font-size: 1.25rem;
  }
`;

interface IProps {
  $isBold: boolean;
}

export const Link = styled.a<IProps>`
  text-decoration: none;
  display: flex;
  flex-direction: inherit;
  align-items: center;
  cursor: pointer;
  color: inherit;
  font-weight: ${({ $isBold }) => ($isBold ? "600" : "400")};
`;

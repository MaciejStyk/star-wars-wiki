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
  width: 95%;
  max-width: 800px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

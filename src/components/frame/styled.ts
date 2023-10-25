import styled from "styled-components";

import { HEADER_SIZE } from "const";

export const Main = styled.main`
  position: fixed;
  top: ${HEADER_SIZE}px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: overlay;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 85%;
  max-width: 600px;
  padding: ${({ theme }) => theme.spacing.lg} 0;
`;

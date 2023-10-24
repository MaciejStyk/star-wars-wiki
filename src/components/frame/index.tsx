import { FC, ReactNode } from "react";

import * as Styled from "./styled";

interface IFrame {
  children: ReactNode;
}

export const Frame: FC<IFrame> = ({ children }) => {
  return (
    <Styled.Main>
      <Styled.Wrapper>{children}</Styled.Wrapper>
    </Styled.Main>
  );
};

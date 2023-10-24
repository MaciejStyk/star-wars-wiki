import { FC } from "react";

import * as Styled from "./styled";

export const Loading: FC = () => {
  return (
    <Styled.ImageWrapper>
      <Styled.Image src="https://cdn.dribbble.com/users/601803/screenshots/2037073/media/aec474e1f6b179bfbcc0d001894b006e.gif" />
    </Styled.ImageWrapper>
  );
};

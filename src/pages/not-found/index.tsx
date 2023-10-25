import { FC } from "react";

import * as Styled from "./styled";

export const NotFound: FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.InnerWrapper>
        <Styled.Image src="https://a.allegroimg.com/s1024/0c9bf9/ddb1633f493ea2326c03ec4c4f07" />
        <Styled.TextWrapper>
          This is not the page you're looking for. <br />
          <br /> Move along ...
          <br /> Move along ...
        </Styled.TextWrapper>
      </Styled.InnerWrapper>
    </Styled.Wrapper>
  );
};

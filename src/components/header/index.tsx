import { useLocation } from "react-router-dom";

import * as Types from "types";

import * as Styled from "./styled";

export const Header = () => {
  const { pathname } = useLocation();

  const isBold = (path: Types.PATH) =>
    pathname.split("/").includes(path.substring(1)) ||
    (pathname === "/" && path === Types.PATH.CHARACTERS);

  return (
    <Styled.Header>
      <Styled.Wrapper>
        <Styled.Link
          href={Types.PATH.CHARACTERS}
          $isBold={isBold(Types.PATH.CHARACTERS)}
        >
          CHARACTERS
        </Styled.Link>
        <Styled.Link
          href={Types.PATH.PLANETS}
          $isBold={isBold(Types.PATH.PLANETS)}
        >
          PLANETS
        </Styled.Link>
        <Styled.Link
          href={Types.PATH.VEHICLES}
          $isBold={isBold(Types.PATH.VEHICLES)}
        >
          VEHICLES
        </Styled.Link>
      </Styled.Wrapper>
    </Styled.Header>
  );
};

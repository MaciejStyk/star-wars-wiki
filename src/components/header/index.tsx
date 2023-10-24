import { useLocation } from "react-router-dom";
import { Space } from "antd";

import * as Components from "components";
import { useTheme } from "theme";
import * as Types from "types";
import * as Styled from "./styled";

export const Header = () => {
  const {
    palette: { secondaryBlack },
  } = useTheme();

  const { pathname } = useLocation();

  const tabType = (path: Types.PATH) => {
    if (
      pathname.split("/").includes(path.substring(1)) ||
      (pathname === "/" && path === Types.PATH.CHARACTERS)
    )
      return "h1semiBold";
    return "h2regular";
  };

  return (
    <Styled.Header>
      <Styled.Wrapper>
        <Space size="large">
          <Components.Link to={Types.PATH.CHARACTERS}>
            <Components.Text
              text="CHARACTERS"
              type={tabType(Types.PATH.CHARACTERS)}
              color={secondaryBlack}
              cursor="pointer"
            />
          </Components.Link>
          <Components.Link to={Types.PATH.PLANETS}>
            <Components.Text
              text="PLANETS"
              type={tabType(Types.PATH.PLANETS)}
              color={secondaryBlack}
              cursor="pointer"
            />
          </Components.Link>
          <Components.Link to={Types.PATH.VEHICLES}>
            <Components.Text
              text="VEHICLES"
              type={tabType(Types.PATH.VEHICLES)}
              color={secondaryBlack}
              cursor="pointer"
            />
          </Components.Link>
        </Space>
      </Styled.Wrapper>
    </Styled.Header>
  );
};

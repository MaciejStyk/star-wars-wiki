import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Empty, Button, Typography } from "antd";

import * as Types from "types";

import * as Styled from "./styled";

export const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <Styled.Wrapper>
      <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{ height: 130 }}
        description={
          <Typography.Title level={3}>
            We couldn't find the page you are looking for
          </Typography.Title>
        }
      >
        <Button
          type="primary"
          size="large"
          onClick={() => navigate(Types.PATH.HOME)}
        >
          Go to home page
        </Button>
      </Empty>
    </Styled.Wrapper>
  );
};

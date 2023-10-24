import { FC, MouseEvent } from "react";
import type * as CSS from "csstype";

import * as Styled from "./styled";
import { Typography } from "./types";
import "./index.css";

interface IText extends CSS.Properties {
  text: string | number | undefined;
  type?: Typography;
  onClick?: (e: MouseEvent<HTMLParagraphElement>) => void;
  onMouseUp?: (e: MouseEvent<HTMLParagraphElement>) => void;
}

export const Text: FC<IText> = ({
  onClick,
  onMouseUp,
  text,
  type = "primary",
  ...props
}) => {
  return (
    <Styled.Paragraph
      onClick={onClick}
      onMouseUp={onMouseUp}
      className={type}
      {...props}
    >
      {text}
    </Styled.Paragraph>
  );
};

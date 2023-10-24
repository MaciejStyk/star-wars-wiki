import styled from "styled-components";
import type * as CSS from "csstype";

export const Paragraph = styled.p<CSS.Properties>`
  color: ${({ color, theme }) =>
    color ? color : theme.palette.secondaryBlack};
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-bottom: ${({ borderBottom }) => borderBottom};
  white-space: ${({ whiteSpace }) => whiteSpace};
  font-size: ${({ fontSize }) => fontSize};
  font-style: ${({ fontStyle }) => fontStyle};
  text-align: ${({ textAlign }) => textAlign};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-transform: ${({ textTransform }) => textTransform};
  text-decoration: ${({ textDecoration }) => textDecoration};
  cursor: ${({ cursor }) => cursor};
`;

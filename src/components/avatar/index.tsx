import styled from "styled-components";

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  min-height: 50px;
  min-width: 50px;
  object-fit: cover;
  border-radius: 50%;

  @media (min-width: 550px) {
    width: 70px;
    height: 70px;
    min-height: 70px;
    min-width: 70px;
  }
`;

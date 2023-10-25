import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 85%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const TextWrapper = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 500px) {
    font-size: 1.5rem;
    text-align: left;
  }
`;

export const Image = styled.img`
  height: 300px;
  object-fit: cover;

  @media (min-width: 500px) {
    height: 400px;
    font-size: 1.55rem;
    max-width: 50%;
  }
`;

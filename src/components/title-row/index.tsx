import styled from "styled-components";

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (min-width: 550px) {
    font-size: 1.5rem;
  }
`;

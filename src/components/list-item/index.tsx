import styled from "styled-components";

export const ListItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.sm};
  border-bottom: 1px solid ${({ theme }) => theme.palette.lightGray};
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.palette.lightBlueGray};
    cursor: pointer;
  }

  @media (min-width: 450px) {
    font-size: 1.25rem;
  }

  @media (min-width: 550px) {
    font-size: 1.5rem;
  }
`;

import styled from "styled-components";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ListItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.sm};
  transition: 0.2s;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.palette.lightGray};
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.lightBlueGray};
    cursor: pointer;
  }
`;

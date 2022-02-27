import styled from 'styled-components';

export const AlternatBlocksStyled = styled.div`
  .alternateBlock {
    &:nth-of-type(even) {
      & div:nth-of-type(1) {
        @media (min-width: ${({ theme }) => theme.screens.md}) {
          order: 99;
        }
      }
    }
  }
`;

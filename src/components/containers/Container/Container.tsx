import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 160rem;
  margin: 0 auto;
  padding: calc((${({ theme }) => theme.navHeight}) + 3.2rem) 2.4rem 3.2rem;

  ${({ contactPageContainer }: any) => contactPageContainer && `
    display: flex;
    flex-direction: column;
    gap: 6.4rem;
  `}

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    ${({ contactPageContainer }: any) => contactPageContainer && `
      flex-direction: row;

      div {
        width: 50%;
      }
    `}
  }

  &.nav {
    padding: 0 2.4rem;
    max-width: 100%;
  }
`;

export default Container;
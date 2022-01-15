import styled from 'styled-components';

export const TitleWithDescriptionWrapper = styled.div`
    @media (min-width: ${({ theme }) => theme.screens.md}) {
        width: 70%;
    }

    & > div {
        @media (min-width: ${({ theme }) => theme.screens.xxl}) {
            & > div {
                min-width: 28%;
            }
        }
    }
`;
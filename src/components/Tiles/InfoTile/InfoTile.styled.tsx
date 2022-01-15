import styled from 'styled-components';

export const InfoTileWrapper = styled.div`
    border-radius: 2.5rem;
    -webkit-box-shadow: 16px 15px 56px -28px rgba(49, 48, 45, 1);
    -moz-box-shadow: 16px 15px 56px -28px rgba(49, 48, 45, 1);
    box-shadow: 16px 15px 56px -28px rgba(49, 48, 45, 1);
    transition: transform .4s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }

    ${({ largeSize }: any) => largeSize && `
        flex-grow: 2;
    `}

    p {
        &:last-of-type {
            padding-bottom: 0;
        }
    }

    @media (max-width: ${({ theme }) => theme.screens.md}) {
        width: 100%;
    }
    
`;
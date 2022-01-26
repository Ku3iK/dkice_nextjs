import styled from 'styled-components';

export const IconWithListTileStyled = styled.div`
    min-height: 20rem;
    max-height: 30rem;
    border-radius: 2.5rem;
    height: 100%;
    min-width: 20rem;
    
    @media (min-width: ${({ theme }) => theme.screens.sm}) {
        -webkit-box-shadow: 16px 15px 56px -28px rgba(49, 48, 45, 1);
        -moz-box-shadow: 16px 15px 56px -28px rgba(49, 48, 45, 1);
        box-shadow: 16px 15px 56px -28px rgba(49, 48, 45, 1);
        transition: transform .4s ease-in-out;
        min-width: auto;
    }

    &:hover {
        transform: translateY(-1rem);
    }
`;

export const IconWithListTileImageStyled = styled.div`
    min-width: 2rem;
    min-height: 2rem;
    max-width: 2rem;
    max-height: 2rem;
    background-color: red;

    img {
        width: 100%;
        height: 100%;
    }
`;
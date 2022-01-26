import styled from 'styled-components';

export const HeroImageStyled = styled.div`
    min-height: 40rem;

    ::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        transform: translate(-2rem, 2rem);
        border-radius: 2rem;
        background-color: ${({ theme }) => theme.color.secondary};
    }

    img {
        border-radius: 2rem;
    }
`;
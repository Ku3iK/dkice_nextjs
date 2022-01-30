import styled from 'styled-components';

export const BgImageHeroStyled = styled.div`
    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: ${({ theme }) => theme.color.black};
        opacity: .4;
        z-index: -3;
    }
`;
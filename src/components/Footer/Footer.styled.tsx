import styled from "styled-components";

export const FooterStyled = styled.section`
    a {
        color: ${({ theme }) => theme.color.grey};

        &:hover {
            color: ${({ theme }) => theme.color.textLight}
        }

        &.active {
            font-weight: ${({ theme }) => theme.fontWeight.bold};
        }
    }
`;

export const FooterAboutCompanyStyled = styled.div`
    & > *:not(:last-child) {
        padding-bottom: 2.4rem;
    } 
`;

export const FooterContactStyled = styled.div`
    &:not(:last-child) {
        padding-bottom: 1rem;
    }
`;
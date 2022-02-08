import styled from 'styled-components';

export const DotListElementStyled = styled.li`
    &::before {
        content: '';
        display: block;
        width: 1rem;
        height: 1rem;
        margin-right: 1.2rem;
        background-color: ${({ theme }) => theme.color.black};
        border-radius: 25rem;
    }
`;
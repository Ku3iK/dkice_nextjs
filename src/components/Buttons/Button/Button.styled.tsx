import styled from "styled-components";

export const ButtonWrapper = styled.button`
    border: .2rem solid ${({ theme }) => theme.color.grey};
    transition: .3s ease-in-out;
    border-radius: 1.6rem;

    &:hover {
        background-color: ${({ theme }) => theme.color.secondary};
        border-color: ${({ theme }) => theme.color.secondary};
        color: ${({ theme }) => theme.color.white};
    }
`;
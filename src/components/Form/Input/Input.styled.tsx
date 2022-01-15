import styled from 'styled-components';

export const InputWrapper = styled.input`
    border: none;
    border-bottom: .2rem solid ${({ theme }) => theme.color.grey };
    outline: none;
    font-family: ${({ theme }) => theme.fontFamily.name};
    transition: border-color .3s ease-in-out;

    ${({ as }: any) => as === 'textarea' && `
        height: 25rem;
    `}

    ::placeholder {
        color: ${({ theme }) => theme.color.grey };
        transition: color .3s ease-in-out;
    }

    &:hover,
    &:focus {
        border-color: ${({ theme }) => theme.color.secondary };

        ::placeholder {
            color: ${({ theme }) => theme.color.secondary };
        }
    }

`;
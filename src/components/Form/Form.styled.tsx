import styled from "styled-components";
import { FormStyledInterface } from "./FormInterface";

export const FormWrapper = styled.div<FormStyledInterface>`
    ${({ withoutContainer }) => withoutContainer && `
    `}

    @media (min-width: ${({ theme }) => theme.screens.md}) {
        ${({ withoutContainer }) => withoutContainer && `
            width: 50%;
            margin: 0 auto;
        `}
    }

    form {
        div {
            width: 100%;
        }
    }
`;
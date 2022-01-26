import styled from 'styled-components';
import listIcon from 'src/assets/images/listIcon.svg';

export const ListElementStyled = styled.li`
    &::before {
        content: '';
        display: inline-block;
        background-image: url(${listIcon.src});
        background-position: center center;
        background-repeat: no-repeat;
        width: 2rem;
        height: 2rem;
        vertical-align: middle;
        margin-right: 0.8rem;
    }
`;
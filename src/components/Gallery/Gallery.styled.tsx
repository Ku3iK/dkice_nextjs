import styled from 'styled-components';

export const GallerySliderWrapper = styled.div`
    background-color: rgba(0, 0, 0, .7);
`;

export const GallerySliderContent = styled.div`
    width: 60%; 
`;

export const ExitButton = styled.button`
    left: 105%;
    transform: translate(0, -50%);
    z-index: 99;
    transition: transform .3s ease-in-out;

    &:hover {
        transform: translate(0, -50%) scale(1.2);
    }
`;

export const SingleImageWrapper = styled.div`
    transition: ease-in-out .3s;

    & > div {
        background-color: rgba(0, 0, 0, .4);
        transition: ease-in-out .3s;

        & > * {
            width: 100%;
        }

        p {
            -moz-hyphens:auto;
            -ms-hyphens:auto;
            -webkit-hyphens:auto;
            hyphens:auto;
            word-wrap:break-word;
        }
    }
`;
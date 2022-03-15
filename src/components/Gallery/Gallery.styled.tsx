import styled from 'styled-components';

export const GallerySliderWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
`;

export const GallerySliderContent = styled.div`
  width: 60%;
`;

export const ExitButton = styled.button`
  left: 105%;
  transform: translate(0, -50%);
  z-index: 99;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translate(0, -50%) scale(1.2);
  }
`;

export const SingleImageWrapper = styled.div`
  height: 25rem;
  transition: ease-in-out 0.3s;

  &.singleImageInSlider {
    height: 30vw;
    margin: 0 auto;
    min-height: 40rem;
    max-height: 80rem;
    max-width: 70%;
  }

  & > div {
    background-color: rgba(0, 0, 0, 0.4);
    transition: ease-in-out 0.3s;

    & > * {
      width: 100%;
    }

    p {
      -moz-hyphens: auto;
      -ms-hyphens: auto;
      -webkit-hyphens: auto;
      hyphens: auto;
      word-wrap: break-word;
    }
  }
`;

import styled from "styled-components";

export const IndustriesBoxWrapper = styled.div`
    &::before {
      content: '';
      opacity: 0;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: ${({ theme }) => theme.color.black};
      transition: opacity .3s ease-in-out;
      z-index: 3;
    }

    &:hover {
      color: ${({ theme }) => theme.color.white};
      
      &::before {
        opacity: .7;
      }
    }

    &:first-of-type {
      background-color: ${({ theme }) => theme.color.textDark};
    }
`;
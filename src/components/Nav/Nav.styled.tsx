import styled from "styled-components"

export const NavWrapper = styled.nav`
    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        width: 100%;
        background-color: ${({ theme }) => theme.color.background};
        -webkit-box-shadow: 0px 10px 12px -10px rgba(66, 68, 90, 1);
        -moz-box-shadow: 0px 10px 12px -10px rgba(66, 68, 90, 1);
        box-shadow: 0px 10px 12px -10px rgba(66, 68, 90, 1);
        z-index: 99;

        & > a {
            z-index: 100;
        }

        ul {
            display: flex;

            li {
                padding: 18px;

                a {
                    font-weight: ${({ theme }) => theme.fontWeight.medium};

                    &.active {
                        font-weight: ${({ theme }) => theme.fontWeight.bold};
                    }
                }
            }

            @media (max-width: ${({ theme }) => theme.screens.tablet}) {
                position: fixed;
                display: ${({ isNavVisible }: any) => isNavVisible ? 'block' : 'none'};
                top: 0;
                right: 0;
                background-color: ${({ theme }) => theme.color.background};
                flex-direction: column;
                width: 100%;
                height: 100vh;
                padding: 7rem 0;
                z-index: 10;
            }

        }

        &__burgerMenu {
            display: flex;
            z-index: 100;
            padding: 2.4rem 0;

            &-burger {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 5rem;
                height: 3rem;
                margin-right: 2rem;
                opacity: 1;
                cursor: pointer;

                & div {
                    height: .5rem;
                    background-color: ${({ theme }) => theme.color.textDark};
                    width: 100%;
                }

                @media (min-width: ${({ theme }) => theme.screens.tablet}) {
                    display: none;
                    opacity: 0;
                }
            }
        }
    }
`;
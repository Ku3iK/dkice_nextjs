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
            li {
                a {
                    font-weight: ${({ theme }) => theme.fontWeight.medium};

                    &.active {
                        font-weight: ${({ theme }) => theme.fontWeight.bold};
                    }
                }
            }

            @media (max-width: ${({ theme }) => theme.screens.md}) {
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
            &-burger {
                & div {
                    height: .5rem;
                    background-color: ${({ theme }) => theme.color.textDark};
                    width: 100%;
                }

                @media (min-width: ${({ theme }) => theme.screens.md}) {
                    display: none;
                    opacity: 0;
                }
            }
        }
    }
`;
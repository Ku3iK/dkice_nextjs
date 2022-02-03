import styled from 'styled-components';

export const AccordionComponentStyled = styled.div`
    .accordion {
        &__icon {
            transition-property: visibility, opacity;
            transition-duration: .3s;
        }
    }

    [aria-expanded='true'] {
        .accordion {
            &__icon {
                &--active {
                    visibility: visible;
                    opacity: 1;
                }

                &--inactive {
                    visibility: hidden;
                    opacity: 0;
                }
            }
        }
    }

    [aria-expanded='false'] {
        .accordion__icon {
            &--active {
                visibility: hidden;
                opacity: 0;
            }

            &--inactive {
                visibility: visible;
                opacity: 1;
            }
        }
    }
`;

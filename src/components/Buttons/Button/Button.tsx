import { ButtonWrapper } from './Button.styled';
import classNames from 'clsx';

const Button = ({ 
    children, 
    type,
    notCentered,
    as,
    scrollTo,
}: any) => {
    const classess = classNames(
        `block my-0 bg-transparent py-12 px-24 text-16 text-grey cursor-pointer`,
        {
            'mx-auto': !notCentered,
            'inline-block': as,
        }
    );

    const conditionalAttributes = (as && as === 'a' && scrollTo) ? { href: scrollTo, as: as  } : {};

    return (
        <ButtonWrapper 
            {...conditionalAttributes}
            type={type && type}
            className={classess}
        >
            {children}
        </ButtonWrapper>
    );
};

export default Button;
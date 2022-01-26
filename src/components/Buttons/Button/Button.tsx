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

    return (
        <ButtonWrapper 
            href={as === 'a' && scrollTo && scrollTo}
            type={type && type}
            className={classess}
            as={as && scrollTo && as}
        >
            {children}
        </ButtonWrapper>
    );
};

export default Button;
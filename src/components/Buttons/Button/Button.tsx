import { ButtonWrapper } from './Button.styled';
import classNames from 'clsx';

const Button = ({ 
    children, 
    type
}: any) => {
    const classess = classNames(`block my-0 mx-auto bg-transparent py-12 px-24 text-16 text-grey cursor-pointer`);

    return (
        <ButtonWrapper 
            type={type && type}
            className={classess}
        >
            {children}
        </ButtonWrapper>
    );
};

export default Button;
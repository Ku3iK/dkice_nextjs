import { InputWrapper } from './Input.styled';
import classNames from 'clsx';

const Input = ( props: any ) => {
    const inputClasses = classNames(`mb-16 p-12 resize-none bg-transparent text-14 font-semibold`);

    return (
        <InputWrapper {...props} className={inputClasses} />
    ); 
};

export default Input;
import Button from '@components/Buttons/Button';
import { FormWrapper } from './Form.styled';
import FormFieldsList from './FormFieldsList';
import { FormInterface } from './FormInterface';
import { useRouter } from 'next/router';

const Form = ({
    formName,
    isNetlifyFrom,
    formContent,
    withoutContainer,
    buttonText,
}: FormInterface) => {
    const { locale } = useRouter();

    return(
        <FormWrapper withoutContainer={withoutContainer && withoutContainer}>
            <form
                name={formName && formName} 
                method={'POST'} 
                data-netlify={isNetlifyFrom} 
                className={'flex flex-col justify-center'}
            >   <input type="hidden" name="form-name" value={formName && formName} /> 
                {formContent && !!formContent && (formContent.filter(({ language }: any) => language === locale ).map((({ fields }: any, key: number) => (
                    <FormFieldsList 
                        key={key}
                        formContent={fields} 
                    />
                )))
                )}
                <div>
                    {buttonText && <Button type={'submit'}>{buttonText}</Button>}
                </div>
            </form>
        </FormWrapper>
    );
};

export default Form;
import React from "react";
import Input from './Input/Input';

const FormFieldsList = ({ formContent }: any) => (
    <>
        {formContent && !!formContent && (
            formContent.map((props: any, key: number) => (
                <Input
                    key={key}
                    {...props} 
                />
            ))
        )}
    </>
);

export default FormFieldsList;

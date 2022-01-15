export interface FormInterface {
    formName: string;
    isNetlifyFrom: boolean;
    formContent: any;
    withoutContainer: boolean;
    buttonText: string;
};

export interface FormStyledInterface {
    withoutContainer?: boolean;
};
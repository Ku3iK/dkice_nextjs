export interface TitleWithTextInterface {
    isTitleInOtherColumn?: boolean;
    title: string;
    texts: Array<{
        text: string;
    }>;
    classNames?: string;
};
import { TextsArrayType } from "../TextContainersInterface";

export interface TitleWithTextInterface {
    isTitleInOtherColumn?: boolean;
    title: string;
    texts: Array<TextsArrayType>;
    classNames?: string;
};
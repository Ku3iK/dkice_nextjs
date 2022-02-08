import { TextsArrayType } from "../TextContainersInterface";

export interface TextGridInterface {
    title?: string;
    texts: Array<TextsArrayType>;
    classNames?: string;
}
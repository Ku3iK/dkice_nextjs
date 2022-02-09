import { TextsArrayType } from "../TextContainersInterface";

export interface TextWithImageInterface {
    title?: string;
    texts: Array<TextsArrayType>;
    imageUrl: string;
    reverseElements?: boolean;
}
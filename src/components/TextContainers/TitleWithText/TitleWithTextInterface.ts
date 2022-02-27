import { TextsArrayType } from '../TextContainersInterface';

export interface TitleWithTextInterface {
  isTitleInOtherColumn?: boolean;
  title: string;
  texts: Array<TextsArrayType>;
  imageUrl?: string;
  classNames?: string;
}

import { TextsArrayType } from '../TextContainersInterface';

export interface TextWithListInterface {
  title?: string;
  description?: string;
  listTitle?: string;
  imageUrl?: string;
  listContent: Array<{
    listElement: string;
  }>;
  classNames?: string;
}

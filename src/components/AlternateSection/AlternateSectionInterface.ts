export interface AlternateBlockInterface {
  stepTitle: string;
  stepDescription: string;
  stepImage: string;
}

export interface AlternateSectionInterface {
  title: string;
  steps: AlternateBlockInterface[];
  classNames?: string;
}

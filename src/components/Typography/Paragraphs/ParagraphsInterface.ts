import { HTMLAttributes } from 'react';

export interface ParagraphsInterface {
    level?: 'small' | 'medium' | 'large';
    boldText?: boolean;
}

export type ParagraphElementProps = HTMLAttributes<HTMLElement>
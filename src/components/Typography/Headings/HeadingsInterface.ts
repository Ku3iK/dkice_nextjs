import { HTMLAttributes } from 'react';

export interface HeadingsInterface {
    level?: 1 | 2 | 3 | 4 | 5 | 6 | 'subtitle';
    classHeading?: 1 | 2 | 3 | 4 | 5 | 6 | 'subtitle';
    boldText?: boolean;
}
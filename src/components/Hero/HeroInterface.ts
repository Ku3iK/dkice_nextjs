export interface HeroInterface {
    title: string;
    description: string;
    imageUrl: string;
    buttonData?: {
        href?: string;
        buttonContent?: string;
    };
}

export interface HeroImageInterface {
    imageUrl: string;
}
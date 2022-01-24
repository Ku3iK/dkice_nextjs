export interface ImageListInterface {
    id: string;
    image: Array<{
        url: string;
    }> | {
        url?: string;
    };
    imageDescription?: string;
    imageTitle?: string;
    imageTitleDe?: string;
    imageDescriptionDe?: string;
}

export interface GalleryImageListInterface {
    imagesList: Array<ImageListInterface>;
    onImageClick?: any;
    isSlider?: boolean;
}
interface GalleriesContent {
    image: Array<{
        url: string;
    }>;
    imageDescription?: string;
    imageDescriptionDe?: string;
    imageTitle?: string;
    imageTitleDe?: string;
}

export interface GalleriesInterface {
    data: {
        allDkiceGalleries?: Array<GalleriesContent>;
        allMagmetGalleries?: Array<GalleriesContent>;
    }
}
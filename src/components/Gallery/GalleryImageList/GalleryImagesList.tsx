import SingleImage from '@components/Gallery/SingleImage/SingleImage';
import { GalleryImageListInterface, ImageListInterface } from '@components/Gallery/GalleryImageList/GalleryImageListInterface';
import { useRouter } from 'next/router';

const GalleryImagesList = ({
    imagesList,
    onImageClick,
    isSlider,
}: GalleryImageListInterface) => {
    const { locale }: any = useRouter();

    return (
        <>
            {imagesList && !!imagesList && (
                imagesList.map((
                    { 
                        id,
                        image, 
                        imageTitle, 
                        imageDescription, 
                        imageTitleDe, 
                        imageDescriptionDe 
                    }: ImageListInterface, key: number) => (
                        <SingleImage
                            key={id}
                            image={image}
                            imageTitle={locale === "pl-PL" ? imageTitle : imageTitleDe}
                            imageDescription={locale === "pl-PL" ? imageDescription : imageDescriptionDe}
                            {...!isSlider && { handleSelectDisplayedImg: onImageClick, index: key }}
                        />
                ))
            )}
        </>
    )
};

export default GalleryImagesList;

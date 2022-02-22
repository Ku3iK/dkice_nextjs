import { useState } from 'react';
import { ExitButton, GallerySliderWrapper, GallerySliderContent } from './Gallery.styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import GalleryImagesList from '@components/Gallery/GalleryImageList/GalleryImagesList';
import { GalleryInterface } from './GalleryInterface';
import SingleImage from '@components/Gallery/SingleImage/SingleImage';
import { useRouter } from 'next/router';

const imageSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
}

const Gallery = ({ galleryData }: any) => {
    const { locale }: any = useRouter();

    const [ slideIndex, setSlideIndex ] = useState(0);
    const [ isImgPopupOpen, setIsImgPopupOpen ] = useState(false);

    const handleSelectDisplayedImg = (key: number) => {
        handleShowGelleryPopup();
        setSlideIndex(key);
    };

    const handleShowGelleryPopup = () => setIsImgPopupOpen( prevImgPopupState => !prevImgPopupState );

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 gap-34`}>
            <GalleryImagesList
                imagesList={galleryData} 
                onImageClick={handleSelectDisplayedImg}
            />

            {isImgPopupOpen && (
                <GallerySliderWrapper 
                    className={`absolute hidden md:flex justify-center items-center top-0 right-0 bottom-0 left-0 z-10`}
                    onClick={() => handleShowGelleryPopup()}
                >
                    <GallerySliderContent 
                        className={`relative z-20`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ExitButton className={`absolute block top-0 text-20 cursor-pointer text-white bg-transparent border-0`} onClick={() => handleShowGelleryPopup()}>X</ExitButton>
                        <Slider 
                            initialSlide={slideIndex}
                            {...imageSliderSettings} 
                        >
                            {!!galleryData?.length && (
                                galleryData.map(({ image, imageTitle, imageDescription, imageTitleDe, imageDescriptionDe }: GalleryInterface, tileKey: number) => (
                                    <SingleImage
                                        key={tileKey}
                                        image={image}
                                        imageTitle={locale === "pl-PL" ? imageTitle : imageTitleDe}
                                        imageDescription={locale === "pl-PL" ? imageDescription : imageDescriptionDe}
                                    />
                                ))
                            )}
                        </Slider>
                    </GallerySliderContent>
                </GallerySliderWrapper>
            )}
        </div>
    )
}

export default Gallery;
import Button from '@components/Buttons/Button';
import { HeroInterface } from '@components/Hero/HeroInterface';
import Headings from '@components/Typography/Headings';
import Paragraphs from '@components/Typography/Paragraphs';
import Image from 'next/image';
import { BgImageHeroStyled } from './BgImageHero.styled';

const BgImageHero = ({
    title,
    description,
    imageUrl,
    buttonData,
}: HeroInterface) => {
    return(
        <BgImageHeroStyled className={'relative'}>
            <div className={'w-full md:w-2/3 xl:w-1/2 px-32 py-48 z-50 text-textLight'}>
                {title && 
                    <Headings 
                        level={1} 
                        boldText
                    >
                        {title}
                    </Headings>}
                {description && 
                    <Paragraphs 
                        level={'medium'}
                        className={'py-32'}
                    >
                        {description}
                    </Paragraphs>}
                {buttonData && (
                    <div>
                        <Button 
                            scrollTo={buttonData.href && buttonData.href}
                            notCentered
                            as={'a'}
                        >
                            {buttonData.buttonContent}
                        </Button>
                    </div>
                )}
            </div>
            <div className="absolute -z-10 top-0 right-0 bottom-0 left-0">
                <Image
                    src={imageUrl}
                    layout={'fill'}
                    objectFit={'cover'}
                    quality={100}
                />
            </div>
        </BgImageHeroStyled>
    );
}

export default BgImageHero;
import Button from '@components/Buttons/Button';
import HeroImage from './HeroImage';
import { HeroInterface } from './HeroInterface';

const Hero = ({
    title,
    description,
    imageUrl,
    buttonData,
}: HeroInterface) => {
    return(
        <div className={'grid grid-cols-1 md:grid-cols-2 pb-48 md:pb-96'}>
            <div className={'flex flex-col justify-center md:w-3/4 order-2 md:order-none pt-48 md:pt-0'}>
                {title && <h1 className={'text-48'}>{title}</h1>}
                {description && <p className={'text-20 py-32'}>{description}</p>}
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
            <HeroImage 
                imageUrl={imageUrl}
            />
        </div>
    );
};

export default Hero;
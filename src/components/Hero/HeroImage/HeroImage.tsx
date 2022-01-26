import Image from 'next/image';
import { HeroImageInterface } from '../HeroInterface';
import { HeroImageStyled } from './HeroImage.styled';

const HeroImage = ({ imageUrl }: HeroImageInterface) => {
    return(
        <HeroImageStyled className={'flex justify-center relative'}>
            <Image 
                src={imageUrl}
                layout={'fill'}
                objectFit={'cover'}
            />
        </HeroImageStyled>
    );
}

export default HeroImage;
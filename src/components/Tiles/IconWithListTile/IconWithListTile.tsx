import { IconWithListTileInterface } from './IconWithListTileInterface';
import Image from 'next/image';
import { IconWithListTileStyled, IconWithListTileImageStyled } from './IconWithListTile.styled';

const IconWithListTile = ({
    iconUrl,
    tileTitle,
    listElements,
}: IconWithListTileInterface) => {
    return (
        <IconWithListTileStyled className={'flex flex-col justify-center w-full p-32 bg-white cursor-pointer'}>
            {iconUrl && (
                <div className={'flex justify-center mx-auto w-1/2 pb-32'}>
                    <Image 
                        src={iconUrl}
                        width={70}
                        height={70}
                        objectFit={'contain'}
                    />
                </div>
            )}
            {tileTitle && <h4 className={'text-center'}>{tileTitle}</h4>}
        </IconWithListTileStyled>
    );
}

export default IconWithListTile;
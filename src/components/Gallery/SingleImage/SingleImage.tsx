import clsx from 'clsx';
import Image from 'next/image';
import { SingleImageWrapper } from '../Gallery.styled';
import { SingleImageInterface } from './SingleImageInterface';

const SingleImage = ({
  index,
  image,
  imageTitle,
  imageDescription,
  handleSelectDisplayedImg,
  className
}: SingleImageInterface) => {
  return (
    <SingleImageWrapper
      className={clsx(`relative cursor-pointer`, className)}
      onClick={handleSelectDisplayedImg && (() => handleSelectDisplayedImg(index))}>
      <Image
        src={image.url}
        alt={imageTitle ? imageTitle : `Zdjęcie nr ${index} w galerii`}
        layout="fill"
        objectFit="cover"
      />
      <div
        className={`flex flex-col absolute left-0 top-0 w-full h-full overflow-y-scroll opacity-0 py-16 px-24 text-textLight hover:opacity-100`}>
        {imageTitle && <h3 className={`pb-24 text-24`}>{imageTitle}</h3>}
        {imageDescription && <p className={`text-16`}>{imageDescription}</p>}
      </div>
    </SingleImageWrapper>
  );
};

export default SingleImage;

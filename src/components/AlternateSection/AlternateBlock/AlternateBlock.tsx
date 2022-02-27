import Headings from '@components/Typography/Headings';
import Paragraphs from '@components/Typography/Paragraphs';
import { AlternateBlockInterface } from '../AlternateSectionInterface';
import Image from 'next/image';

const AlternatBlock = ({ stepTitle, stepDescription, stepImage }: AlternateBlockInterface) => {
  return (
    <div className={'alternateBlock grid grid-cols-1 md:grid-cols-2 gap-48'}>
      <div className={'flex flex-col justify-center mt-48'}>
        {stepTitle && <Headings level={5}>{stepTitle}</Headings>}
        {stepDescription && (
          <Paragraphs level={'medium'} className={'pt-16'}>
            {stepDescription}
          </Paragraphs>
        )}
      </div>
      {stepImage && (
        <div className={'relative lg:w-10/12 h-[100vw] min-h-[400px] max-h-[500px] lg:h-3/4'}>
          <Image
            src={stepImage}
            alt={stepTitle}
            layout={'fill'}
            objectFit={'cover'}
            className={'rounded-16'}
          />
        </div>
      )}
    </div>
  );
};

export default AlternatBlock;

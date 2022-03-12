import Container from '@components/containers/Container/Container';
import List from '@components/List';
import Headings from '@components/Typography/Headings';
import Paragraphs from '@components/Typography/Paragraphs';
import { TextWithListInterface } from './TextWithListInterface';
import Image from 'next/image';

const TextWithList: React.FunctionComponent<TextWithListInterface> = ({
  title,
  description,
  listTitle,
  listContent,
  imageUrl,
  classNames
}) => {
  return (
    <section className={`${classNames}`}>
      <Container {...{ withoutPadding: true }}>
        {title && <Headings level={2}>{title}</Headings>}
        <div className={'grid md:grid-cols-2 gap-32 md:gap-48'}>
          {description && (
            <div className="flex flex-col">
              <Paragraphs level={'medium'} className={'py-32'}>
                {description}
              </Paragraphs>
              {imageUrl && (
                <div className={'relative h-[100vw] max-h-[400px]'}>
                  <Image
                    src={imageUrl}
                    alt={''}
                    layout={'fill'}
                    objectFit={'cover'}
                    className={'rounded-16'}
                  />
                </div>
              )}
            </div>
          )}
          <div className={'md:py-32'}>
            {listTitle && <Headings level={5}>{listTitle}</Headings>}
            <List listContent={listContent} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TextWithList;

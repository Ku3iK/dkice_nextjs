import Container from '@components/containers/Container/Container';
import Headings from '@components/Typography/Headings';
import Paragraphs from '@components/Typography/Paragraphs';
import clsx from 'clsx';
import React from 'react';
import { TitleWithTextInterface } from './TitleWithTextInterface';
import Image from 'next/image';

const TitleWithText: React.FunctionComponent<TitleWithTextInterface> = ({
  isTitleInOtherColumn,
  title,
  imageUrl,
  texts,
  classNames
}) => {
  return (
    <section className={classNames}>
      <Container
        className={'grid md:grid-cols-2 gap-32 md:gap-48 pt-0'}
        {...{ withoutPadding: true }}>
        {isTitleInOtherColumn && (
          <div>
            <Headings level={2}>{title}</Headings>
            {imageUrl && (
              <div className={'relative lg:w-10/12 h-[100vw] max-h-[400px] lg:h-3/4 mt-48'}>
                <Image
                  src={imageUrl}
                  alt={title}
                  layout={'fill'}
                  objectFit={'cover'}
                  className={'rounded-16'}
                />
              </div>
            )}
          </div>
        )}
        <div>
          {!isTitleInOtherColumn && <Headings level={2}>{title}</Headings>}
          {!!texts?.length &&
            texts.map(({ text }, textKey: number) => (
              <Paragraphs
                key={textKey}
                className={clsx('pb-16', { 'pt-32': !isTitleInOtherColumn })}>
                {text}
              </Paragraphs>
            ))}
        </div>
      </Container>
    </section>
  );
};

export default TitleWithText;

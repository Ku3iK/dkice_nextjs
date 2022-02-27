import Headings from '@components/Typography/Headings';
import Paragraphs from '@components/Typography/Paragraphs';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import AccordionComponent from './AccordionComponent';
import { AccordionComponentInterface } from './AccordionComponent/AccordionComponentInterface';
import { AccordionSectionInterface } from './AccordionSectionInterface';

const AccordionSection: React.FunctionComponent<
  AccordionSectionInterface & AccordionComponentInterface
> = ({ reverseElements, classNames, title, description, imageUrl, tabs }) => {
  return (
    <section className={`grid md:grid-cols-2 gap-32 md:gap-48 ${classNames}`}>
      <div className={clsx({ 'md:order-last': reverseElements })}>
        {title && <Headings level={2}>{title}</Headings>}
        {description && <Paragraphs className={'pt-24'}>{description}</Paragraphs>}
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
      <AccordionComponent tabs={tabs} />
    </section>
  );
};

export default AccordionSection;

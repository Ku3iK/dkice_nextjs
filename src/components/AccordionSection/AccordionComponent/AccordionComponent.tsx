import Headings from '@components/Typography/Headings';
import Paragraphs from '@components/Typography/Paragraphs';
import Image from 'next/image';
import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';
import { AccordionComponentStyled } from './AccordionComponent.styled';
import { AccordionComponentInterface } from './AccordionComponentInterface';

const AccordionComponent: React.FunctionComponent<AccordionComponentInterface> = ({
    tabs,
}) => {
    return (
        <AccordionComponentStyled>
            <Accordion allowZeroExpanded={true}>
                {tabs?.map(({ tabTitle, tabParagraphs }, tabKey: number) => (
                    <AccordionItem key={tabKey} className={'my-12 border-2 rounded-8'}>
                        <AccordionItemHeading className={'p-24'}>
                            <AccordionItemButton className={'flex justify-between'}>
                                <Headings level={5}>{tabTitle}</Headings>
                                <div className={'accordion__iconsContainer self-center relative w-16 h-16'}>
                                <Image 
                                        className={'accordion__icon accordion__icon--active absolute top-0 right-0 bottom-0 left-0'}
                                        src={'/icons/accordion-arrow-up.svg'}
                                        layout={'fill'}
                                    />
                                    <Image 
                                        className={'accordion__icon accordion__icon--inactive absolute top-0 right-0 bottom-0 left-0'}
                                        src={'/icons/accordion-arrow-down.svg'}
                                        layout={'fill'}
                                    />
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className={'px-24 pb-24'}>
                            {tabParagraphs?.map(({ tabParagraph }, tabParagraphsKey: number) => (
                                <Paragraphs key={tabParagraphsKey}>{tabParagraph}</Paragraphs>
                            ))}
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </AccordionComponentStyled>
    );
}

export default AccordionComponent;
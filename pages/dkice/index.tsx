import Container from '@components/containers/Container/Container';
import dkiceHomePageContent from 'src/assets/i18n/dkice/dkiceHomePage.json';
import DynamicContent from '@components/containers/DynamicContent';
import { useRouter } from 'next/router';
import React from 'react';
import BgImageHero from '@components/BgImageHero';
import TitleWithText from '@components/TextContainers/TitleWithText';
import AccordionSection from '@components/AccordionSection';
import TextsGrid from '@components/TextContainers/TextsGrid';
import TextWithList from '@components/TextContainers/TextWithList';

const { dkiceHomePage }: any = dkiceHomePageContent;

const DkicePage = () => {
  const { locale } = useRouter();

  return (
    <div className='pt-80'>
      {dkiceHomePage && dkiceHomePage?.filter(({ language }: any) => language === locale ).map(({ 
        heroTitle, 
        heroDescription, 
        heroImageUrl, 
        buttonData, 
        tilesContainer,
        whatIsDryIceCleaningSection,
        principlesOfDryIceCleaning,
        dryIceApplication,
        cleanlinssInEveryField,
        hydronomyCleaning
      }: any, key: number) => (
        <React.Fragment key={key}>
          <BgImageHero 
            title={heroTitle}
            description={heroDescription}
            imageUrl={heroImageUrl}
            buttonData={buttonData}
          />
          <Container {...{insideSection: true}}>
            <TitleWithText 
              isTitleInOtherColumn={whatIsDryIceCleaningSection.isTitleInOtherColumn}
              title={whatIsDryIceCleaningSection.title}
              texts={whatIsDryIceCleaningSection.texts}
              classNames="py-48 md:py-80"
            />
            <AccordionSection 
              reverseElements
              title={principlesOfDryIceCleaning.title}
              description={principlesOfDryIceCleaning.description}
              tabs={principlesOfDryIceCleaning.accordionTabs}
              classNames="pb-48 md:pb-80"
            />
            <TextsGrid
              title={dryIceApplication.title}
              texts={dryIceApplication.texts}
              classNames="py-48 md:py-80"
            />
            <AccordionSection 
              title={cleanlinssInEveryField.title}
              description={cleanlinssInEveryField.description}
              tabs={cleanlinssInEveryField.accordionTabs}
              classNames="py-48 md:py-80"
            />
            <DynamicContent 
              tilesContainer={tilesContainer[0]}
              classNames="py-48 md:py-80"
            />
            <TextWithList
              title={hydronomyCleaning.title}
              description={hydronomyCleaning.description}
              listTitle={hydronomyCleaning.listTitle}
              listContent={hydronomyCleaning.listContent}
              classNames="py-48 md:py-80"
            />
          </Container>
        </React.Fragment>
      ))}
    </div>
  )
}

export default DkicePage;
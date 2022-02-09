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
import TextWithImage from '@components/TextContainers/TextWithImage';
import ListsContainer from '@components/containers/ListsContainer';

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
        hydronomyCleaning,
        whatIsHydronomyCleaning,
        whaterJetCleaning
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
              classNames={'firstSection'}
            />
            <AccordionSection 
              reverseElements
              title={principlesOfDryIceCleaning.title}
              description={principlesOfDryIceCleaning.description}
              tabs={principlesOfDryIceCleaning.accordionTabs}
            />
            <TextsGrid
              title={dryIceApplication.title}
              texts={dryIceApplication.texts}
            />
            <AccordionSection 
              title={cleanlinssInEveryField.title}
              description={cleanlinssInEveryField.description}
              tabs={cleanlinssInEveryField.accordionTabs}
            />
            <DynamicContent 
              tilesContainer={tilesContainer[0]}
            />
            <TextWithList
              title={hydronomyCleaning.title}
              description={hydronomyCleaning.description}
              listTitle={hydronomyCleaning.listTitle}
              listContent={hydronomyCleaning.listContent}
            />
            <TextWithImage 
              title={whatIsHydronomyCleaning.title}
              texts={whatIsHydronomyCleaning.texts}
              imageUrl={whatIsHydronomyCleaning.imageUrl}
              reverseElements={whatIsHydronomyCleaning.reverseElements}
            />
            <ListsContainer 
              title={whaterJetCleaning.title}
              lists={whaterJetCleaning.lists}
            />
          </Container>
        </React.Fragment>
      ))}
    </div>
  )
}

export default DkicePage;
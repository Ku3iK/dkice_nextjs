import Container from '@components/containers/Container/Container';
import dkiceHomePageContent from 'src/assets/i18n/dkice/dkiceHomePage.json';
import DynamicContent from '@components/containers/DynamicContent';
import Hero from '@components/Hero';
import { useRouter } from 'next/router';
import React from 'react';
import BgImageHero from '@components/BgImageHero';
import TitleWithText from '@components/TextContainers/TitleWithText';

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
        whatIsDryIceCleaningSection
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
            <DynamicContent 
              tilesContainer={tilesContainer[0]}
            />
          </Container>
        </React.Fragment>
      ))}
    </div>
  )
}

export default DkicePage;
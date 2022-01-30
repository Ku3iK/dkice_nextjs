import Container from '@components/containers/Container/Container';
import dkiceHomePageContent from 'src/assets/i18n/dkice/dkiceHomePage.json';
import DynamicContent from '@components/containers/DynamicContent';
import Hero from '@components/Hero';
import { useRouter } from 'next/router';
import React from 'react';

const { dkiceHomePage }: any = dkiceHomePageContent;

const DkicePage = () => {
  const { locale } = useRouter();

  return (
    <Container>
      {dkiceHomePage && dkiceHomePage?.filter(({ language }: any) => language === locale ).map(({ heroTitle, heroDescription, heroImageUrl, buttonData, tilesContainer }: any, key: number) => (
        <React.Fragment key={key}>
          <Hero 
            title={heroTitle}
            description={heroDescription}
            imageUrl={heroImageUrl}
            buttonData={buttonData}
          />
          <DynamicContent 
            tilesContainer={tilesContainer[0]}
          />
        </React.Fragment>
      ))}
    </Container>
  )
}

export default DkicePage;
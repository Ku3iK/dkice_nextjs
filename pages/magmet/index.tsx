import magmetHomePageContent from 'src/assets/i18n/magmet/magmetHomePage.json';
import { useRouter } from 'next/router';
import Container from '@components/containers/Container/Container';
import React from 'react';
import BgImageHero from '@components/BgImageHero';
import TitleWithText from '@components/TextContainers/TitleWithText';
import TextWithList from '@components/TextContainers/TextWithList';

const { magmetHomePage }: any = magmetHomePageContent;

const MagmetPage = () => {
  const { locale } = useRouter();

  return (
    <div className='pt-80'>
      {magmetHomePage && magmetHomePage?.filter(({ language }: any) => language === locale ).map(({ 
        heroTitle, 
        heroDescription, 
        heroImageUrl, 
        buttonData,
        aboutUs,
        whatYouWin,
      }: any, key: number) => (
        <React.Fragment key={key}>
            <BgImageHero 
              title={heroTitle}
              description={heroDescription}
              imageUrl={heroImageUrl}
              buttonData={buttonData}
            />
            <Container {...{insideSection: true}}>
              {console.log(aboutUs)}
              <TitleWithText 
                isTitleInOtherColumn={aboutUs.isTitleInOtherColumn}
                title={aboutUs.sectionTitle}
                texts={aboutUs.texts}
                classNames={'firstSection'}
              />
              <TextWithList 
                title={whatYouWin.title}
                description={whatYouWin.description}
                listContent={whatYouWin.listContent}
              />
            </Container>
        </React.Fragment>
      ))}
    </div>
  )
}

export default MagmetPage;
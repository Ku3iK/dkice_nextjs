import magmetHomePageContent from 'src/assets/i18n/magmet/magmetHomePage.json';
import { useRouter } from 'next/router';
import Container from '@components/containers/Container/Container';
import React from 'react';
import BgImageHero from '@components/BgImageHero';
import TitleWithText from '@components/TextContainers/TitleWithText';
import TextWithList from '@components/TextContainers/TextWithList';
import AlternateSection from '@components/AlternateSection';

const { magmetHomePage }: any = magmetHomePageContent;

const MagmetPage = () => {
  const { locale } = useRouter();

  return (
    <div className="pt-80">
      {!!magmetHomePage?.length &&
        magmetHomePage
          ?.filter(({ language }: any) => language === locale)
          .map(
            (
              {
                heroTitle,
                heroDescription,
                heroImageUrl,
                buttonData,
                aboutStairs,
                whatYouWin,
                aboutTerraces,
                howStairsAreMade
              }: any,
              key: number
            ) => (
              <React.Fragment key={key}>
                <BgImageHero
                  title={heroTitle}
                  description={heroDescription}
                  imageUrl={heroImageUrl}
                  buttonData={buttonData}
                />
                <Container {...{ insideSection: true }}>
                  <TitleWithText
                    isTitleInOtherColumn={aboutStairs.isTitleInOtherColumn}
                    title={aboutStairs.sectionTitle}
                    texts={aboutStairs.texts}
                    classNames={'firstSection'}
                  />
                  <TextWithList
                    title={whatYouWin.title}
                    description={whatYouWin.description}
                    listContent={whatYouWin.listContent}
                    imageUrl={whatYouWin.imageUrl}
                  />
                  <TitleWithText
                    isTitleInOtherColumn={aboutTerraces.isTitleInOtherColumn}
                    title={aboutTerraces.sectionTitle}
                    texts={aboutTerraces.texts}
                  />
                  <AlternateSection title={howStairsAreMade.title} steps={howStairsAreMade.steps} />
                </Container>
              </React.Fragment>
            )
          )}
    </div>
  );
};

export default MagmetPage;

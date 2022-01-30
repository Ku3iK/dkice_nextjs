import magmetHomePageContent from 'src/assets/i18n/magmet/magmetHomePage.json';
import { useRouter } from 'next/router';
import Container from '@components/containers/Container/Container';
import React from 'react';
import BgImageHero from '@components/BgImageHero';

const { magmetHomePage }: any = magmetHomePageContent;

const MagmetPage = () => {
  const { locale } = useRouter();

  return (
    <div className='pt-80'>
      {magmetHomePage && magmetHomePage?.filter(({ language }: any) => language === locale ).map(({ heroTitle, heroDescription, heroImageUrl, buttonData }: any, key: number) => (
        <React.Fragment key={key}>
            <BgImageHero 
              title={heroTitle}
              description={heroDescription}
              imageUrl={heroImageUrl}
              buttonData={buttonData}
            />
        </React.Fragment>
      ))}
    </div>
  )
}

export default MagmetPage;
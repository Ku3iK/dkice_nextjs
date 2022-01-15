import styled from 'styled-components';
import IndustrieBox from '@components/IndustrieBox';
import industriesBoxesContent from 'src/assets/i18n/industriesBoxes.json';
import magmetBg from 'src/assets/images/magmetBG.jpg';
import { IndustriesBoxesDataInterface } from 'src/types/IndustriesBoxesDataInterface';
import { useRouter } from 'next/router';

const { industriesBoxes }: any = industriesBoxesContent;

export default function Home() {
  const { locale } = useRouter();

  return (
    <div className='flex flex-col w-full h-screen pt-84'>
      {industriesBoxes?.filter(({ language }: IndustriesBoxesDataInterface) => language === locale )
        ?.map(({  
          title, 
          description,
          bgImage
        }: IndustriesBoxesDataInterface, key: number) => (
          <IndustrieBox
            {...{key: key}}
            path={"/dkice"}
            title={title}
            content={description} 
            bgImage={bgImage && bgImage}
          />
      )) }
    </div>
  )
}

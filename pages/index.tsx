import IndustrieBox from '@components/IndustrieBox';
import industriesBoxesContent from 'src/assets/i18n/industriesBoxes.json';
import { IndustriesBoxesDataInterface } from 'src/types/IndustriesBoxesDataInterface';
import { useRouter } from 'next/router';

const { industriesBoxes }: any = industriesBoxesContent;

export default function Home() {
  const { locale } = useRouter();

  return (
    <div className='flex flex-col w-full h-screen pt-80'>
      {industriesBoxes?.filter(({ language }: IndustriesBoxesDataInterface) => language === locale )
        ?.map(({  
          slug,
          title, 
          description,
          bgImage
        }: IndustriesBoxesDataInterface, key: number) => (
          <IndustrieBox
            {...{key: key}}
            path={slug}
            title={title}
            content={description} 
            bgImage={bgImage && bgImage}
          />
      )) }
    </div>
  )
}

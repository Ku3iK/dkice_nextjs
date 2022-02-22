import InfoTile from '../Tiles/InfoTile/InfoTile';
import { TitleWithDescriptionWrapper } from './TitleWithDescription.styled';
import { useRouter } from 'next/router';
import { InfoTileInterface } from '@components/Tiles/InfoTile/InfoTileInterface';
import Container from '@components/containers/Container/Container';

const TitleWithDescription = ({ content }: any) => {
    const { locale } = useRouter();

    return (
        <Container>
            {!!content?.length && (content.filter(({ language }: any) => language === locale ).map(({ pageTitle, pageDescription, infoTiles }: any, key: number) => (
                <TitleWithDescriptionWrapper 
                    key={key}
                    className={'mb-48 text-center md:mt-0 md:mx-auto md:mb-64'}
                >
                    {pageTitle && <h1 className={'pb-24 text-32 font-bold'}>{pageTitle}</h1>}
                    {pageDescription && <p className={'pb-48'}>{pageDescription}</p>}
                    {!!infoTiles?.length && (
                        <div className={'flex justify-between flex-wrap gap-32 text-left'}>
                            {infoTiles.map(({ title, values, isLink }: InfoTileInterface, tileKey: number) => (
                                <InfoTile 
                                    key={tileKey}
                                    title={title}
                                    values={values}
                                    isLink={isLink}
                                />
                            ))}
                        </div>
                    )}
                </TitleWithDescriptionWrapper>
            )))}
        </Container>
    );
};

export default TitleWithDescription;
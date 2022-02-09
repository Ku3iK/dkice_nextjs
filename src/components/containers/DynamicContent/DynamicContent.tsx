import IconWithListTile from '@components/Tiles/IconWithListTile';
import Headings from '@components/Typography/Headings';
import { useState } from 'react';
import { DynamicContentStyled } from './DynamicContent.styled';
import { DynamicContentInterface } from './DynamicContentInterface';
import DynamicContentText from './DynamicContentText';

const DynamicContent = ({
    classNames,
    tilesContainer,
}: DynamicContentInterface) => {
    const [ activeTile, setActiveTile ] = useState(0);

    return(
        <section id="dynamicContent" className={`${classNames}`}>
            {tilesContainer.sectionTitle && (
                <Headings level={2}>{tilesContainer.sectionTitle}</Headings>
            )}
            <DynamicContentStyled className={'grid sm:grid-cols-2 gap-32 pt-48'}>
                <div className={'flex overflow-x-scroll sm:overflow-visible sm:grid sm:grid-cols-1 lg:grid-cols-2 gap-32 py-32 md:py-0'}>
                {tilesContainer && (
                    <>
                        {tilesContainer.tiles?.map(({ iconUrl, tileTitle, listElements }, contentKey: number) => (
                            <div
                                key={contentKey}
                                onClick={() => setActiveTile(contentKey)}
                            >
                                <IconWithListTile
                                    iconUrl={iconUrl}
                                    tileTitle={tileTitle}
                                    listElements={listElements}
                                />
                            </div>
                        ))}
                    </>

                )}
                </div>
                <div>
                    {tilesContainer && (
                        <DynamicContentText 
                            listElements={tilesContainer.tiles[activeTile].listElements}
                        />
                    )}
                </div>
            </DynamicContentStyled>
        </section>
    );
};

export default DynamicContent;
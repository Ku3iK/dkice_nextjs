import IconWithListTile from '@components/Tiles/IconWithListTile';
import { useState } from 'react';
import { DynamicContentStyled } from './DynamicContent.styled';
import { DynamicContentInterface } from './DynamicContentInterface';
import DynamicContentText from './DynamicContentText';

const DynamicContent = ({
    tilesContainer,
}: DynamicContentInterface) => {
    const [ activeTile, setActiveTile ] = useState(0);

    return(
        <div id="dynamicContent">
            <h3 className={'pb-48'}>{tilesContainer.sectionTitle}</h3>
            <DynamicContentStyled className={'grid xs:grid-cols-2 gap-32'}>
                <div className={'flex overflow-x-scroll xs:overflow-visible xs:grid xs:grid-cols-1 lg:grid-cols-2 gap-32 py-32 md:py-0'}>
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
        </div>
    );
};

export default DynamicContent;
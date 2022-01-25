import IconWithListTile from "@components/Tiles/IconWithListTile";
import React, { useState } from "react";
import { DynamicContentStyled } from './DynamicContent.styled';
import { DynamicContentInterface } from "./DynamicContentInterface";
import DynamicContentText from "./DynamicContentText";
import { useRouter } from "next/router";

const DynamicContent = ({
    tilesContainer,
}: DynamicContentInterface) => {
    const { locale } = useRouter();
    const [ activeTile, setActiveTile ] = useState(0);

    return(
        <div>
            <h3 className={'pb-48'}>Branże, gdzie można zastosować czyszczenie (piaskowanie) suchym lodem</h3>
            <DynamicContentStyled className={'grid xs:grid-cols-2 gap-32'}>
                <div className={'flex overflow-x-scroll xs:overflow-visible xs:grid xs:grid-cols-1 lg:grid-cols-2 gap-32'}>
                {tilesContainer?.filter(({ language }: any) => language === locale ).map(({ tiles }, tilesKey: number) => (
                    <React.Fragment key={tilesKey}>
                        {tiles?.map(({ iconUrl, tileTitle, listElements }, contentKey: number) => (
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
                    </React.Fragment>

                ))}
                </div>
                <div>
                    {tilesContainer?.filter(({ language }: any) => language === locale ).map(({ tiles }) => (
                        <DynamicContentText 
                            listElements={tiles[activeTile].listElements}
                        />
                    ))}
                </div>
            </DynamicContentStyled>
        </div>
    );
};

export default DynamicContent;
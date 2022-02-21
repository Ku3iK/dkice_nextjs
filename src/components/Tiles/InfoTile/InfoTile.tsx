import React from 'react';
import { InfoTileWrapper } from './InfoTile.styled';
import { InfoTileInterface } from './InfoTileInterface';

const InfoTile = ({ 
    title, 
    values,
}: InfoTileInterface) => {
    return (
        <InfoTileWrapper 
            {...{largeSize: values?.length > 150 ? true : false}}
            className={'flex flex-col grow p-24'}
        >
            <h4 className={'pb-16 text-24 font-semibold'}>{title}</h4>
            {values && !!values && values.map(({ value }, key: number) => (
                <p 
                    key={key}
                    className={'pb-8 text-16'}
                >
                    {value}
                </p>
            ))}
        </InfoTileWrapper>
    );
};

export default InfoTile;
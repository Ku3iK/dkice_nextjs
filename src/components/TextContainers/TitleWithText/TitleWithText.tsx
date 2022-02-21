import Container from '@components/containers/Container/Container';
import Headings from '@components/Typography/Headings';
import Paragraphs from '@components/Typography/Paragraphs';
import clsx from 'clsx';
import React from 'react';
import { TitleWithTextInterface } from './TitleWithTextInterface';

const TitleWithText: React.FunctionComponent<TitleWithTextInterface> = ({
    isTitleInOtherColumn,
    title,
    texts,
    classNames,
}) => {
    return(
        <section className={classNames}>
            <Container className={'grid md:grid-cols-2 gap-32 md:gap-48 pt-0'} {...{withoutPadding: true}}>
                {isTitleInOtherColumn && (
                    <div>
                        <Headings level={2}>{title}</Headings>
                    </div>
                )}
                <div>
                    { !isTitleInOtherColumn && <Headings level={2}>{title}</Headings> }
                    {texts && !!texts && (texts.map(({ text }, textKey: number) => (
                        <Paragraphs key={textKey} className={clsx('pb-16', { 'pt-32': !isTitleInOtherColumn })}>{text}</Paragraphs>
                    )))}
                </div>
            </Container>
        </section>
    );
}

export default TitleWithText;
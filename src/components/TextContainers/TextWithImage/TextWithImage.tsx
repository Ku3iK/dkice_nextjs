import Container from '@components/containers/Container/Container';
import Headings from '@components/Typography/Headings';
import Paragraphs from '@components/Typography/Paragraphs';
import { TextWithImageInterface } from './TextWithImageInterface';
import clsx from 'clsx';
import Image from 'next/image';

export const TextWithImage: React.FunctionComponent<TextWithImageInterface> = ({
    title,
    texts,
    imageUrl,
    reverseElements
}) => {
    return (
        <section>
            <Container className={'grid lg:grid-cols-2 gap-32 md:gap-48'} {...{withoutPadding: true}}>
                <div className={clsx(
                    {'md:order-last': reverseElements}
                )}>
                    {title && (
                        <div className={'pb-32 md:pb-48'}>
                            <Headings level={2}>{title}</Headings>
                        </div>
                    )}
                    {texts?.map(({ text }, textKey: number) => (
                        <Paragraphs 
                            key={textKey} 
                            level={'medium'}
                            className={'pb-16'}
                        >
                            {text}
                        </Paragraphs>
                    ))}
                </div>
                <div className={'relative lg:w-10/12 h-[100vw] max-h-[400px] lg:h-3/4'}>
                    <Image 
                        src={imageUrl}
                        alt={''}
                        layout={'fill'}
                        objectFit={'cover'}
                        className={'rounded-16'}
                    />
                </div>
            </Container>
        </section>
    );
}

export default TextWithImage;
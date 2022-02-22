import Container from "@components/containers/Container/Container";
import Headings from "@components/Typography/Headings";
import Paragraphs from "@components/Typography/Paragraphs";
import { TextGridInterface } from "./TextsGridInterface";

export const TextsGrid: React.FunctionComponent<TextGridInterface> = ({ 
    title,
    texts,
    classNames
}) => {
    return (
        <section className={`${classNames}`}>
            <Container {...{withoutPadding: true}}>
                {title && (
                    <div>
                        <Headings level={2}>{title}</Headings>
                    </div>
                )}
                <div className={'grid md:grid-cols-2 gap-24 pt-48'}>
                    {!!texts?.length && (texts.map(({ text }, textKey: number) => (
                        <div key={textKey}>
                            <Paragraphs className='pb-16'>{text}</Paragraphs>
                        </div>
                    )))}
                </div>
            </Container>
        </section>
    );
}

export default TextsGrid;
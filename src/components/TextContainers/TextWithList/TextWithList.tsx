import Container from '@components/containers/Container/Container';
import List from '@components/List';
import Headings from '@components/Typography/Headings';
import Paragraphs from '@components/Typography/Paragraphs';
import { TextWithListInterface } from './TextWithListInterface';

const TextWithList: React.FunctionComponent<TextWithListInterface> = ({
    title,
    description,
    listTitle,
    listContent,
    classNames
}) => {
    return (
        <section className={`${classNames}`}>
            <Container {...{withoutPadding: true}}>
                {title && (
                    <Headings level={2}>{title}</Headings>
                )}
                <div className={'grid md:grid-cols-2 gap-32 md:gap-48'}>
                    {description && (
                        <div>
                            <Paragraphs 
                                level={'medium'}
                                className={'py-32'}
                            >
                                {description}
                            </Paragraphs>
                        </div>
                    )}
                    <div className={'md:py-32'}>
                        {listTitle && (
                            <Headings level={5}>{listTitle}</Headings>
                        )}
                        <List listContent={listContent} />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default TextWithList;
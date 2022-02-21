import List from '@components/List';
import Headings from '@components/Typography/Headings';
import Paragraphs from '@components/Typography/Paragraphs';
import Container from '../Container/Container';
import { ListsContainerInterface } from './ListContainerInterface';

export const ListsContainer:React.FunctionComponent<ListsContainerInterface> = ({
    title,
    lists,
}) => {
    return(
        <section>
            <Container {...{withoutPadding: true}}>
                {title && (
                    <Headings level={2}>{title}</Headings>
                )}
                <div className={'grid xlg:grid-cols-2 gap-32 xlg:gap-48 pt-32 md:pt-48'}>
                    {lists && !!lists && (lists.map(({ listDescription, listContent }, listKey:number) => (
                        <div key={listKey}>
                            {listDescription && (
                                <Paragraphs level={'medium'}>{listDescription}</Paragraphs>
                            )}
                            {listContent && (
                                <List 
                                    listContent={listContent}
                                />
                            )}
                        </div>
                    )))}
                </div>
            </Container>
        </section>
    );
}

export default ListsContainer;
import DotListElement from "./DotListElement/DotListElement";
import { ListInterface } from "./ListInterface";

const List: React.FunctionComponent<ListInterface> = ({
    listContent
}) => {
    return (
        <ul className={'pt-24'}>
            {!!listContent?.length && (listContent?.map(({ listElement }, listElementKey: number) => (
                <DotListElement key={listElementKey} content={listElement}/>
            )))}
        </ul>
    );
}

export default List;
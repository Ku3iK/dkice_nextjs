import ListElement from "@components/ListElement";
import { DynamicContentTextInterface } from "./DynamicContentTextInterface";

export const DynamicContentText = ({
    listElements,
}: DynamicContentTextInterface) => {
    return(
        <ul className={'sticky top-1/4 left-0 px-32'}>
        {listElements && !!listElements && (listElements.map(({ listElement }, listElementKey: number) => (
            <ListElement key={listElementKey}>
                {listElement}
            </ListElement>
        )))}
    </ul>
    )
}
// 

export default DynamicContentText;
import { DynamicContentTextInterface } from "./DynamicContentTextInterface";

export const DynamicContentText = ({
    listElements,
}: DynamicContentTextInterface) => {
    return(
        <ul className={'sticky top-1/4 left-0 px-32'}>
        {listElements?.map(({ listElement }, listElementKey: number) => (
            <li 
                key={listElementKey}
                className={'pb-16'}
            >
                {listElement}
            </li>
        ))}
    </ul>
    )
}
// 

export default DynamicContentText;
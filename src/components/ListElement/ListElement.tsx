import { ListElementStyled } from "./ListElement.styled";
import { ListElementInterface } from "./ListElementInterface";

const ListElement = ({ children }: ListElementInterface) => {
    return(
        <ListElementStyled className={'pb-16'}>
            {children}
        </ListElementStyled>
    );
}

export default ListElement;
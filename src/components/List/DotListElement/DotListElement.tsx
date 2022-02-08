import { DotListElementInterface } from '../ListInterface';
import { DotListElementStyled } from './DotListElement.styled';

const DotListElement: React.FunctionComponent<DotListElementInterface> = ({
    content
}) => {
    return (
        <DotListElementStyled className={'flex items-center pb-16'}>{content}</DotListElementStyled>
    );
}

export default DotListElement;
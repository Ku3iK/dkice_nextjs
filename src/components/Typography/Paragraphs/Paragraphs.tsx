import classNames from 'clsx';
import { ParagraphsInterface, ParagraphElementProps } from './ParagraphsInterface';

const paragraphsClassNames = {
    small: 'text-14 leading-24',
    medium: 'text-16 leading-24 sm:text-18 sm:leading-32',
    large: 'text-24 leading-32',
};

const Paragraphs = (props: ParagraphsInterface & ParagraphElementProps) => {
    const { level, boldText, children } = props;

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        <p
            {...props}
            className={classNames(
                [props.className], 
                {
                    [paragraphsClassNames[level || 'medium']]: true,
                    'font-bold': boldText,
                }
            )}
        >
            {children}
        </p>
    );
}

Paragraphs.defaultProps = {
    level: 'medium',
};

export default Paragraphs;
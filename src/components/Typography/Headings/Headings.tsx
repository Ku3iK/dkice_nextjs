import classNames from 'clsx';
import { HeadingsInterface, HeadingElementProps } from './HeadingsInterface';

const headingsClassNames = {
    1: 'text-48 leading-56 lg:text-64 lg:leading-72',
    2: 'text-28 leading-32 sm:text-32 sm:leading-40 md:text-48 md:leading-56 font-bold',
    3: 'text-32 leading-40',
    4: 'text-30 leading-40 font-extrabold',
    5: 'text-20 leading-24 md:text-24 md:leading-32',
    6: 'text-20 leading-24',
    subtitle: 'text-10 leading-24 text-n4 font-black tracking-2 uppercase',
};

const Headings: React.FunctionComponent<HeadingsInterface & HeadingElementProps> = (props) => {
    const { level, classHeading, boldText, children } = props;

    let Tag;
    level === 'subtitle'
        ? ( Tag ='p' as keyof JSX.IntrinsicElements )
        : ( Tag = `h${level}` as keyof JSX.IntrinsicElements );

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        <Tag
            {...props}
            className={classNames(`break-words hyphnes`,
                [classHeading],
                [props.className],
                {
                    [headingsClassNames[
                        (classHeading === undefined ? level : classHeading) || 2
                    ]]: true,
                    'font-bold': boldText,
                }
            )}
            role={'heading'}
        >
            {children}
        </Tag>
    );
}

Headings.defaultProps = {
    level: 2,
  };

export default Headings;
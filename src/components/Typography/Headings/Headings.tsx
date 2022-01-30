import classNames from 'clsx';
import { HeadingElementProps, HeadingsInterface } from './HeadingsInterface';

const headingsClassNames = {
    1: 'text-32 leading-40 sm:text-48 sm:leading-56 lg:text-64 lg:leading-72',
    2: 'text-48 leading-56 font-bold',
    3: 'text-32 leading-40',
    4: 'text-30 leading-40 font-extrabold',
    5: 'text-24 leading-32',
    6: 'text-20 leading-24',
    7: 'text-16 leading-24',
    subtitle: 'text-10 leading-24 text-n4 font-black tracking-2 uppercase',
};

const Headings = (props: HeadingsInterface & HeadingElementProps) => {
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
            className={classNames(
                [classHeading],
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
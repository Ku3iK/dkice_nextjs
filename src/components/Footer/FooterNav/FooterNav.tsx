import Headings from "@components/Typography/Headings";
import Link from "next/link";
import { FooterNavInterface } from "../FooterInterface";

const FooterNav = ({
    navigationTitle,
    domain,
    paths,
}: FooterNavInterface) => {
    return (
        <div>
            {navigationTitle && (
                <Headings level={4}>{navigationTitle}</Headings>
            )}
            <ul className={'pt-16'}>
                {paths && !!paths && (paths.map(( {path, name }, pathKey ) => (
                    <li 
                        key={pathKey} 
                        className={'py-6 text-textLight'} 
                    >
                        <Link 
                            href={`/${domain}${path}`}
                        >
                                {name}
                        </Link>
                    </li>
                )))}
            </ul>
        </div>
    );
}

export default FooterNav;
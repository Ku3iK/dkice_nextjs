import React, {useState} from "react"
import { NavWrapper } from "./Nav.styled";
import Link from "next/link";
import { NavInterface } from "./NavInterface";
import LanguageButton from "@components/Buttons/LanguageButton";
import { useRouter } from "next/router";

const Nav =  ({
    routes,
}: NavInterface ) => {
    const [ isNavVisible, setNavVisibility ] = useState(false);
    const { locale, locales, asPath }: any = useRouter();

    return (
        <NavWrapper {...{isNavVisible: isNavVisible}}>
            <div className={"nav"}>
                <Link href='/'>DKice</Link>
                <ul>
                    {routes && routes.map(( {path, name }, pathKey ) => (
                        <li key={pathKey}>
                            <Link 
                                href={path} 
                                {...{activeClassName: 'active'}} 
                                {...{ onClick: () => setNavVisibility(false)}}>
                                    {name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="nav__burgerMenu">
                    {routes && (
                        <div className="nav__burgerMenu-burger" onClick={() => setNavVisibility(!isNavVisible)} role="button" tabIndex={0}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    )}
                    <LanguageButton
                        location={locale}
                        locations={locales}
                        asPath={asPath}
                        isDe={ locale === 'de-DE' }
                    />
                </div>
            </div>
        </NavWrapper>
    );
};

export default Nav;

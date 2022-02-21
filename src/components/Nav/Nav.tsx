import React, {useState} from "react"
import { NavWrapper } from "./Nav.styled";
import Link from "next/link";
import { NavInterface } from "./NavInterface";
import LanguageButton from "@components/Buttons/LanguageButton";
import { useRouter } from "next/router";
import Container from "@components/containers/Container/Container";

const Nav =  ({
    domain,
    routes,
}: NavInterface ) => {
    const [ isNavVisible, setNavVisibility ] = useState(false);
    const { locale, locales, asPath }: any = useRouter();

    return (
        <NavWrapper {...{isNavVisible: isNavVisible}}>
            <Container className={'nav'}>
                <Link href='/'>DKice</Link>
                <ul className={'hidden md:flex'}>
                    {routes && !!routes && (routes.map(( {path, name }, pathKey ) => (
                        <li 
                            key={pathKey} 
                            className={'p-18'} 
                            onClick={() => setNavVisibility(false)}
                        >
                            <Link 
                                href={`/${domain}${path}`} 
                                {...{activeClassName: 'active'}} 
                            >
                                    {name}
                            </Link>
                        </li>
                    )))}
                </ul>
                <div className={`nav__burgerMenu flex z-50 py-24`}>
                    {routes && !!routes && (
                        <div 
                            className={`nav__burgerMenu-burger flex flex-col justify-between self-center w-30 h-24 mr-10 opacity-100 cursor-pointer`} 
                            onClick={() => setNavVisibility(!isNavVisible)} 
                            role="button" 
                            tabIndex={0}
                        >
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
            </Container>
        </NavWrapper>
    );
};

export default Nav;

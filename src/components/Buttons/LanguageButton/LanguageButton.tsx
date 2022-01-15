import Link from "next/link";
import { LangaugeButtonInterface } from "./LanguageButtonInterface";

const LanguageButton = ({ 
    location,
    locations,
    isDe,
    asPath,
}: LangaugeButtonInterface ) => {
    return (
        <Link
            href={asPath}
            locale={location === locations[0] ? locations[1] : locations[0]}
        >
            <img 
                src={ isDe ? '/polishflag.svg' : '/deutchflag.svg'} 
                className={'cursor-pointer'}
                alt="Dkice Serwis i MAGMET Zäune | zmiana języka strony PL/DE" 
            />
        </Link>
    );
};

export default LanguageButton;

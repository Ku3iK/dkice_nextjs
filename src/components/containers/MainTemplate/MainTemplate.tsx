import Nav from "@components/Nav";
import { useRouter } from 'next/router';
import pathTranslationsContent from 'src/assets/i18n/pathTranslations.json';
import { dkiceDomainRegex } from 'src/utils/domainRegex';

const { pathTranslations }: any = pathTranslationsContent;

const MainTemplate: React.FunctionComponent = ({
  children,
}: any) => {

  const { locale, asPath }: any = useRouter();
  const domain = dkiceDomainRegex.test(asPath) ? 'dkice' : 'magmet';
  const lang = pathTranslations?.filter(({ language }: any) => language === locale);
  const isMainPage = asPath === '/de-DE/' || asPath === '/';

  return (
    <>
      <Nav 
        domain={domain}
        routes={!isMainPage && lang[0].pathTranslation}
      />
        <main>
          {children}
        </main>
      <footer>footer</footer>
    </>
  );
};

export default MainTemplate;
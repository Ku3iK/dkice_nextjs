import Footer from "@components/Footer";
import Nav from "@components/Nav";
import { useRouter } from 'next/router';
import pathTranslationsContent from 'src/assets/i18n/pathTranslations.json';
import { dkiceDomainRegex } from 'src/utils/domainRegex';
import footerContentData from 'src/assets/i18n/footerContent.json';
import contactData from 'src/assets/i18n/contactData.json';

const { pathTranslations }: any = pathTranslationsContent;
const { footerContent }: any = footerContentData;
const { contact }: any = contactData;

const MainTemplate: React.FunctionComponent = ({
  children,
}: any) => {

  const { locale, asPath }: any = useRouter();
  const domain = dkiceDomainRegex.test(asPath) ? 'dkice' : 'magmet';
  const lang = pathTranslations?.filter(({ language }: any) => language === locale);
  const footerTranslations = footerContent?.filter(({ language }: any) => language === locale);
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
      <Footer 
        isMainPage={isMainPage}
        footerContent={footerTranslations[0]}
        contactData={contact}
        navigationData={lang[0].pathTranslation}
      />
    </>
  );
};

export default MainTemplate;
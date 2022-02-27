import Container from '@components/containers/Container/Container';
import Paragraphs from '@components/Typography/Paragraphs';
import { FooterInterface } from './FooterInterface';
import { FooterStyled } from './Footer.styled';
import FooterNav from './FooterNav';
import FooterContact from './FooterContact';
import FooterAboutCompany from './FooterAboutCompany';
import clsx from 'clsx';

const Footer = ({ isMainPage, contactData, footerContent, navigationData }: FooterInterface) => {
  const { title, description, contactSectionTitle } = footerContent;
  const { dkiceMails, magmetMails, companyAddress, dkicePhoneNumbers, magmetPhoneNumbers } =
    contactData;

  return (
    <FooterStyled
      className={clsx('bg-secondary text-textLight', {
        'mt-64': !isMainPage
      })}>
      <Container>
        <div className={'grid xl:grid-cols-2 gap-64'}>
          <FooterAboutCompany
            title={title}
            description={description}
            companyAddress={companyAddress}
          />
          <div className={'grid gap-32 sm:grid-cols-2 sm:gap-0'}>
            <div className={'grid grid-cols-1 gap-24'}>
              {navigationData && (
                <FooterNav navigationTitle={'Dkice'} domain={'dkice'} paths={navigationData} />
              )}
              {dkiceMails && dkicePhoneNumbers && (
                <FooterContact
                  title={contactSectionTitle}
                  emails={dkiceMails}
                  phones={dkicePhoneNumbers}
                />
              )}
            </div>
            <div className={'grid grid-cols-1 gap-24'}>
              {navigationData && (
                <FooterNav
                  navigationTitle={'Schody i balustrady'}
                  domain={'magmet'}
                  paths={navigationData}
                />
              )}
              {magmetMails && magmetPhoneNumbers && (
                <FooterContact
                  title={contactSectionTitle}
                  emails={magmetMails}
                  phones={magmetPhoneNumbers}
                />
              )}
            </div>
          </div>
        </div>
        <div className={'pt-48'}>
          <Paragraphs>© {new Date().getFullYear()} All rights reserved.</Paragraphs>
        </div>
      </Container>
    </FooterStyled>
  );
};

export default Footer;

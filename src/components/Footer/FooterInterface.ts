import { RoutesProps } from "@components/Nav/NavInterface";

interface MailProp {
    mail: string;
};

interface PhoneProp {
    name: string;
    phone: string;
}

interface ContactDataInterface {
    dkiceMails: MailProp[];
    magmetMails: MailProp[];
    companyAddress: FooterAboutCompanyType;
    dkicePhoneNumbers: PhoneProp[];
    magmetPhoneNumbers: PhoneProp[];
}

interface FooterContentInterface {
    title: string;
    description: string;
    contactSectionTitle?: string;
}

export type FooterAboutCompanyType = {
    [key: string]: string;
}

export interface FooterNavInterface {
    navigationTitle?: string;
    domain: string;
    paths: RoutesProps[];
};

export interface FooterContactInterface {
    title?: string;
    emails: MailProp[];
    phones: PhoneProp[];
}

export interface FooterAddressInterface {
    title?: string;
    description?: string;
    companyAddress: FooterAboutCompanyType;
};

export interface FooterInterface {
    isMainPage: boolean;
    contactData: ContactDataInterface;
    footerContent: FooterContentInterface;
    navigationData: RoutesProps[];
};
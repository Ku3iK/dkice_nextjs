import Paragraphs from "@components/Typography/Paragraphs";
import { FooterContactStyled } from "../Footer.styled";
import { FooterContactInterface } from "../FooterInterface";

const renderLink = ( link: string,  linkPrefix?: 'tel' | 'mailto' | '#' ) => (
    <a href={`${linkPrefix && linkPrefix}:${link}`}>{link}</a>
);

const FooterContact = ({
    title,
    emails,
    phones
}: FooterContactInterface) => {
    return (
        <FooterContactStyled>
            {title && (
                <Paragraphs level={'medium'}>{title}</Paragraphs>
            )}
            {!!emails?.length && (emails.map(({  mail }, mailIndex: number) => (
                <Paragraphs key={mailIndex}>{renderLink(mail, 'mailto')}</Paragraphs>
            )))}
            {!!phones?.length && (phones.map(({ name, phone }, phoneIndex: number) => (
                <Paragraphs key={phoneIndex}>{name}: {renderLink(phone, 'tel')}</Paragraphs>
            )))}
        </FooterContactStyled>
    );
}

export default FooterContact;
import { FooterAboutCompanyStyled } from "../Footer.styled";
import Headings from "@components/Typography/Headings";
import Paragraphs from "@components/Typography/Paragraphs";
import { FooterAddressInterface } from "../FooterInterface";
import FooterAddress from "../FooterAddress";

const FooterAboutCompany = ({
    title,
    companyAddress,
    description
}: FooterAddressInterface ) => {
    return (
        <FooterAboutCompanyStyled>
            {title && (
                <Headings level={2} className={'text-textLight'}>{title}</Headings>
            )}
            {companyAddress && (
                <FooterAddress 
                    companyAddress={companyAddress}
                />
            )}
            {description && (
                <Paragraphs>{description}</Paragraphs>
            )}
        </FooterAboutCompanyStyled>
    );
}

export default FooterAboutCompany;
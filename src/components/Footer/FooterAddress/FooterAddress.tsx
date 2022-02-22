import Paragraphs from "@components/Typography/Paragraphs";
import { FooterAddressInterface } from "../FooterInterface";

const FooterAddress = ({ companyAddress }: FooterAddressInterface ) => {
    return (
        <div>
            {!!companyAddress?.length && (
                <div>
                    {Object.keys(companyAddress).map((value, valueIndex) => (
                        <Paragraphs key={valueIndex}>{companyAddress[value]}</Paragraphs>
                    ))}
                </div>
            )}
        </div>
    );
}

export default FooterAddress;
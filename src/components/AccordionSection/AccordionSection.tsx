import Headings from "@components/Typography/Headings";
import Paragraphs from "@components/Typography/Paragraphs";
import clsx from "clsx";
import React from "react";
import AccordionComponent from "./AccordionComponent";
import { AccordionComponentInterface } from "./AccordionComponent/AccordionComponentInterface";
import { AccordionSectionInterface } from "./AccordionSectionInterface";

const AccordionSection: React.FunctionComponent<AccordionSectionInterface & AccordionComponentInterface> = ({
    reverseElements,
    classNames,
    title,
    description,
    tabs,
}) => {
    return(
        <div className={`grid md:grid-cols-2 gap-32 md:gap-48 ${classNames}`}>
            <div className={clsx(
                {'md:order-last': reverseElements}
            )}>
                {title && <Headings level={2}>{title}</Headings>}
                {description && <Paragraphs className={'pt-24'}>{description}</Paragraphs>}
            </div>
            <AccordionComponent 
                tabs={tabs}
            />
        </div>
    );
}

export default AccordionSection;
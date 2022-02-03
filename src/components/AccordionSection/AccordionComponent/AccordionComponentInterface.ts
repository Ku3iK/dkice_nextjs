export interface tabParagraphsInterface {
    tabParagraph: string;
}

export interface SingleTabInterface {
    tabTitle: string;
    tabParagraphs: Array<tabParagraphsInterface>;
}

export interface AccordionComponentInterface {
    tabs: Array<SingleTabInterface>;
};
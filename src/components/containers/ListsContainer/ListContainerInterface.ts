export interface ListsContainerInterface {
    title?: string;
    lists: Array<{
        listDescription?: string;
        listContent?: Array<{
            listElement: string;
        }>
    }>
}
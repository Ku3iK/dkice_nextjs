export interface RoutesProps {
    path: string;
    name: string;
}
export interface NavInterface {
    domain?: string;
    routes?: RoutesProps[];
};
export interface NavInterface {
    domain?: string;
    routes?: Array<{
        path: string;
        name: string;
    }>;
};
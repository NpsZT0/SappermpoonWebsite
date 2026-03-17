export interface IMenu {
    name: string;
    href: string;
};

export interface IProductContent {
    name: string;
    href: string;
    id?: string;
    children?: {
        name: string;
        href: string;
        id?: string;
    }[];
};
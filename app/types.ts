export interface LinkProps {
    id: number;
    text: string;
    href: string;
    isExternal: boolean;
    linkType?: "tel" | "mailto";
}

export interface ImageLinkProps {
    id: number;
    href: string;
    isExternal: boolean;
    image: ImageProps;
}

export interface ImageProps {
    id: number;
    documentId: string;
    url: string;
    alternativeText?: string;
}

export interface LogoProps {
    id: number;
    logoText: string;
    image: ImageProps;
}

export interface LinksGroupProps {
    id: number;
    groupName: string;
    link: LinkProps[];
}

type ComponentType = "blocks.hero-section" | "blocks.info-block";

interface Base<
    T extends ComponentType,
    D extends object = Record<string, unknown>
> {
    id: number;
    __component?: T;
    documentId?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    data?: D;
}

export type Block = HeroSectionProps;

export interface HeroSectionProps extends Base<"blocks.hero-section"> {
    image: ImageProps;
    heading: string;
    headline?: string;
    // theme: "orange";
    cta?: LinkProps;
    link?: LinkProps;
    // logo?: LogoProps;
    // author?: string;
}